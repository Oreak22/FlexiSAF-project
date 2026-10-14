import { useReducer, type FormEvent } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Feedback } from "../components/Feedback";
import { Input, TextArea } from "../components/Input";
import { usePageTitle } from "../hooks/usePageTitle";

const detailLabelClass =
  "text-[9px] font-semibold tracking-[1.1px] text-muted uppercase";
const fieldClass =
  "mt-[7px] blck w-full border-0 border-b border-[#d1cec3] bg-transparent py-[10px] text-[11px] text-ink outline-none focus:border-olive focus-visible:shadow-focus";

type ReservationDraft = {
  name: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  occasion: string;
  notes: string;
};

type ReservationRequest = ReservationDraft & {
  id: string;
  createdAt: string;
};

type ReservationState = {
  draft: ReservationDraft;
  editingId: string | null;
  notice: string;
  requests: ReservationRequest[];
};

type ReservationAction =
  | {
      type: "updateField";
      field: keyof ReservationDraft;
      value: string;
    }
  | {
      type: "submitDraft";
      id: string;
      createdAt: string;
    }
  | {
      type: "editRequest";
      id: string;
    }
  | {
      type: "deleteRequest";
      id: string;
    };

const initialReservationDraft: ReservationDraft = {
  name: "",
  email: "",
  date: "",
  time: "19:00",
  partySize: "2",
  occasion: "Dinner",
  notes: "",
};

const initialReservationState: ReservationState = {
  draft: initialReservationDraft,
  editingId: null,
  notice: "",
  requests: [],
};

function reservationReducer(
  state: ReservationState,
  action: ReservationAction,
): ReservationState {
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        draft: {
          ...state.draft,
          [action.field]: action.value,
        },
        notice: "",
      };
    case "submitDraft": {
      const nextRequest: ReservationRequest = {
        ...state.draft,
        id: state.editingId ?? action.id,
        createdAt: state.editingId
          ? (state.requests.find((request) => request.id === state.editingId)
              ?.createdAt ?? action.createdAt)
          : action.createdAt,
      };
      const requests = state.editingId
        ? state.requests.map((request) =>
            request.id === state.editingId ? nextRequest : request,
          )
        : [nextRequest, ...state.requests];

      return {
        draft: initialReservationDraft,
        editingId: null,
        notice: state.editingId
          ? "Table request updated."
          : "Table request added.",
        requests,
      };
    }
    case "editRequest": {
      const request = state.requests.find((item) => item.id === action.id);
      if (!request) return state;

      const draft: ReservationDraft = {
        name: request.name,
        email: request.email,
        date: request.date,
        time: request.time,
        partySize: request.partySize,
        occasion: request.occasion,
        notes: request.notes,
      };

      return {
        ...state,
        draft,
        editingId: request.id,
        notice: "Editing the selected table request.",
      };
    }
    case "deleteRequest":
      return {
        ...state,
        draft:
          state.editingId === action.id
            ? initialReservationDraft
            : state.draft,
        editingId: state.editingId === action.id ? null : state.editingId,
        notice: "Table request removed.",
        requests: state.requests.filter((request) => request.id !== action.id),
      };
    default:
      return state;
  }
}

function isReservationReady(draft: ReservationDraft) {
  return Boolean(
    draft.name.trim() &&
      draft.email.trim() &&
      draft.date &&
      draft.time &&
      Number(draft.partySize) > 0,
  );
}

export function ReservePage() {
  const [reservationState, dispatchReservation] = useReducer(
    reservationReducer,
    initialReservationState,
  );
  usePageTitle("Reserve a table");

  const reservationReady = isReservationReady(reservationState.draft);
  const totalGuests = reservationState.requests.reduce(
    (sum, request) => sum + Number(request.partySize || 0),
    0,
  );
  const depositEstimate = totalGuests * 25;

  function handleReservationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!reservationReady) return;

    dispatchReservation({
      type: "submitDraft",
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
  }

  function updateReservationField(
    field: keyof ReservationDraft,
    value: string,
  ) {
    dispatchReservation({
      type: "updateField",
      field,
      value,
    });
  }

  return (
    <>
      <section className="px-page pt-[75px] pb-[43px] max-[760px]:px-page-mobile max-[760px]:pt-[55px] max-[760px]:pb-[30px]">
        <span className="text-[10px] font-semibold tracking-[1.1px] text-olive uppercase">
          Plan the evening
        </span>
        <h1 className="mt-[15px] mb-[10px] font-serif text-[58px] leading-[1.02] font-medium max-[760px]:text-[48px]">
          Reserve <em className="text-olive">a table.</em>
        </h1>
        <p className="max-w-[560px] text-[13px] leading-[1.8] text-muted">
          Build a table request, preview the details as you type, then keep a
          small editable board of the evenings you are planning.
        </p>
      </section>
      <section className="grid grid-cols-[1.05fr_.95fr] gap-[7%] px-page pt-[26px] pb-[78px] max-[860px]:grid-cols-1 max-[860px]:gap-8 max-[860px]:px-page-mobile max-[860px]:pt-4 max-[860px]:pb-[54px]">
        <Card className="px-[30px] pt-[27px] pb-[29px] max-[760px]:px-5 max-[760px]:py-6">
          <form onSubmit={handleReservationSubmit}>
            <span className={detailLabelClass}>Plan a table</span>
            <h2 className="mt-[7px] mb-5 font-serif text-[29px] leading-tight font-medium">
              Shape the evening.
            </h2>
            <Input
              label="Guest name"
              name="reservation-name"
              autoComplete="name"
              required
              value={reservationState.draft.name}
              onChange={(event) =>
                updateReservationField("name", event.target.value)
              }
              placeholder="Name for the table"
            />
            <Input
              label="Email address"
              name="reservation-email"
              type="email"
              autoComplete="email"
              required
              value={reservationState.draft.email}
              onChange={(event) =>
                updateReservationField("email", event.target.value)
              }
              placeholder="you@example.com"
            />
            <div className="grid grid-cols-3 gap-4 max-[620px]:grid-cols-1 max-[620px]:gap-0">
              <Input
                label="Date"
                name="reservation-date"
                type="date"
                required
                value={reservationState.draft.date}
                onChange={(event) =>
                  updateReservationField("date", event.target.value)
                }
              />
              <Input
                label="Time"
                name="reservation-time"
                type="time"
                required
                value={reservationState.draft.time}
                onChange={(event) =>
                  updateReservationField("time", event.target.value)
                }
              />
              <Input
                label="Guests"
                name="party-size"
                type="number"
                min="1"
                max="12"
                required
                value={reservationState.draft.partySize}
                onChange={(event) =>
                  updateReservationField("partySize", event.target.value)
                }
              />
            </div>
            <label className="my-[14px] block text-label text-[#54534a]">
              Occasion
              <select
                className={fieldClass}
                value={reservationState.draft.occasion}
                onChange={(event) =>
                  updateReservationField("occasion", event.target.value)
                }
              >
                <option value={'Dinner'}>Dinner</option>
                <option value={'Date night'}>Date night</option>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Family meal'}>Family meal</option>
                <option value={'Work dinner'}>Work dinner</option>
              </select>
            </label>
            <TextArea
              label="Details"
              name="reservation-notes"
              rows={3}
              value={reservationState.draft.notes}
              onChange={(event) =>
                updateReservationField("notes", event.target.value)
              }
              placeholder="High chair, patio seat, allergies, or anything helpful"
            />
            <Button className="mt-2" type="submit" disabled={!reservationReady}>
              {reservationState.editingId ? "Update request" : "Add request"}
              <span aria-hidden="true">→</span>
            </Button>
            {reservationState.notice && (
              <Feedback state="success" className="mt-[15px]">
                {reservationState.notice}
              </Feedback>
            )}
          </form>
        </Card>
        <ReservationBoard
          draft={reservationState.draft}
          editingId={reservationState.editingId}
          requests={reservationState.requests}
          totalGuests={totalGuests}
          depositEstimate={depositEstimate}
          onEdit={(id) =>
            dispatchReservation({
              type: "editRequest",
              id,
            })
          }
          onDelete={(id) =>
            dispatchReservation({
              type: "deleteRequest",
              id,
            })
          }
        />
      </section>
    </>
  );
}

type ReservationBoardProps = {
  draft: ReservationDraft;
  editingId: string | null;
  requests: ReservationRequest[];
  totalGuests: number;
  depositEstimate: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

function ReservationBoard({
  draft,
  editingId,
  requests,
  totalGuests,
  depositEstimate,
  onEdit,
  onDelete,
}: ReservationBoardProps) {
  const previewGuests = Number(draft.partySize || 0);
  const previewLabel =
    draft.date && draft.time
      ? `${draft.date} at ${draft.time}`
      : "Pick a date and time";
  const requestCountLabel =
    requests.length === 1 ? "1 request" : `${requests.length} requests`;

  return (
    <div className="grid content-start gap-5">
      <Card className="px-[26px] py-6">
        <span className={detailLabelClass}>Live preview</span>
        <h3 className="mt-[8px] font-serif text-[25px] leading-tight font-medium">
          {draft.name.trim() || "New table request"}
        </h3>
        <dl className="mt-5 grid grid-cols-2 gap-4 text-xs max-[420px]:grid-cols-1">
          <div>
            <dt className={detailLabelClass}>When</dt>
            <dd className="mt-1 text-muted">{previewLabel}</dd>
          </div>
          <div>
            <dt className={detailLabelClass}>Party</dt>
            <dd className="mt-1 text-muted">
              {previewGuests > 0 ? `${previewGuests} guests` : "Guest count"}
            </dd>
          </div>
          <div>
            <dt className={detailLabelClass}>Occasion</dt>
            <dd className="mt-1 text-muted">{draft.occasion}</dd>
          </div>
          <div>
            <dt className={detailLabelClass}>Status</dt>
            <dd className="mt-1 text-muted">
              {editingId ? "Editing saved request" : "Drafting"}
            </dd>
          </div>
        </dl>
      </Card>
      <Card className="px-[26px] py-6" tone="paper">
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4 max-[420px]:block">
          <div>
            <span className={detailLabelClass}>Request board</span>
            <h3 className="mt-[8px] font-serif text-[25px] leading-tight font-medium">
              {requestCountLabel}
            </h3>
          </div>
          <div className="text-right text-xs text-muted max-[420px]:mt-3 max-[420px]:text-left">
            <span className="block">{totalGuests} guests planned</span>
            <span className="block">${depositEstimate} deposit estimate</span>
          </div>
        </div>
        {requests.length === 0 ? (
          <Feedback state="empty" className="mt-5">
            No table requests yet.
          </Feedback>
        ) : (
          <ul className="mt-2">
            {requests.map((request) => (
              <li
                className="border-b border-line py-4 last:border-b-0"
                key={request.id}
              >
                <div className="flex items-start justify-between gap-4 max-[520px]:block">
                  <div>
                    <h4 className="text-[13px] font-semibold">
                      {request.name}
                    </h4>
                    <p className="mt-1 text-[11px] leading-[1.7] text-muted">
                      {request.partySize} guests · {request.date} at{" "}
                      {request.time} · {request.occasion}
                    </p>
                    {request.notes && (
                      <p className="mt-2 text-[11px] leading-[1.7] text-muted">
                        {request.notes}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 max-[520px]:mt-3">
                    <button
                      className="text-[10px] font-semibold tracking-[1px] text-olive uppercase"
                      type="button"
                      onClick={() => onEdit(request.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-[10px] font-semibold tracking-[1px] text-danger uppercase"
                      type="button"
                      onClick={() => onDelete(request.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

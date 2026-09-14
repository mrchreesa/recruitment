"use client";

import {
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button, cx } from "../ui";

/* ------------------------------------------------------------------ */
/* Shared field chrome                                                 */
/* ------------------------------------------------------------------ */

const fieldBase =
  "w-full rounded-2xl border-2 border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink " +
  "placeholder:text-ink-3/70 transition-colors duration-150 " +
  "hover:border-ink/35 focus:border-grape focus:outline-none " +
  "[&:user-invalid]:border-coral";

function Label({
  htmlFor,
  children,
  required,
  hint,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="mb-2 flex items-baseline justify-between gap-3">
      <label htmlFor={htmlFor} className="text-[0.83rem] font-bold tracking-tight text-ink">
        {children}
        {required && <span className="ml-1 text-coral">*</span>}
      </label>
      {hint && <span className="text-[0.72rem] text-ink-3">{hint}</span>}
    </div>
  );
}

export function Field({
  label,
  hint,
  required,
  type = "text",
  className,
  ...rest
}: {
  label: string;
  hint?: string;
  required?: boolean;
  type?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className={className}>
      <Label htmlFor={id} required={required} hint={hint}>
        {label}
      </Label>
      <input id={id} type={type} required={required} className={fieldBase} {...rest} />
    </div>
  );
}

export function SelectField({
  label,
  options,
  placeholder = "Please choose…",
  required,
  hint,
  className,
  ...rest
}: {
  label: string;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  hint?: string;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();
  return (
    <div className={className}>
      <Label htmlFor={id} required={required} hint={hint}>
        {label}
      </Label>
      <div className="relative">
        <select
          id={id}
          required={required}
          defaultValue=""
          className={cx(fieldBase, "appearance-none pr-11")}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
}

export function TextareaField({
  label,
  hint,
  required,
  rows = 4,
  className,
  ...rest
}: {
  label: string;
  hint?: string;
  required?: boolean;
  rows?: number;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <div className={className}>
      <Label htmlFor={id} required={required} hint={hint}>
        {label}
      </Label>
      <textarea id={id} rows={rows} required={required} className={cx(fieldBase, "resize-y")} {...rest} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chip multi-select                                                   */
/* ------------------------------------------------------------------ */

export function ChipGroup({
  label,
  options,
  hint,
  className,
  single,
}: {
  label: string;
  options: readonly string[];
  hint?: string;
  className?: string;
  single?: boolean;
}) {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (opt: string) =>
    setPicked((prev) =>
      single
        ? prev.includes(opt)
          ? []
          : [opt]
        : prev.includes(opt)
          ? prev.filter((p) => p !== opt)
          : [...prev, opt],
    );

  return (
    <fieldset className={className}>
      <legend className="mb-2 flex w-full items-baseline justify-between gap-3">
        <span className="text-[0.83rem] font-bold tracking-tight text-ink">{label}</span>
        {hint && <span className="text-[0.72rem] text-ink-3">{hint}</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const on = picked.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              aria-pressed={on}
              className={cx(
                "rounded-full border-2 px-4 py-2 text-[0.83rem] font-semibold tracking-tight transition-all duration-150",
                on
                  ? "border-ink bg-zest text-ink shadow-block"
                  : "border-line bg-white text-ink-2 hover:border-ink/40 hover:text-ink",
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* CV drop zone                                                        */
/* ------------------------------------------------------------------ */

export function FileDrop({
  label = "Upload your CV",
  hint = "PDF, DOC or DOCX · max 10MB",
  className,
}: {
  label?: string;
  hint?: string;
  className?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<{ name: string; size: string } | null>(null);
  const [dragging, setDragging] = useState(false);

  const accept = (f: File | undefined) => {
    if (!f) return;
    setFile({ name: f.name, size: `${Math.max(1, Math.round(f.size / 1024))} KB` });
  };

  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-[0.83rem] font-bold tracking-tight text-ink">{label}</span>
        <span className="text-[0.72rem] text-ink-3">{hint}</span>
      </div>

      {file ? (
        <div className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-zest-soft p-4 animate-pop">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-ink bg-zest">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#14121A" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3v5h5M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[0.9rem] font-bold text-ink">{file.name}</span>
            <span className="block text-[0.76rem] text-ink-3">{file.size} · ready to send</span>
          </span>
          <button
            type="button"
            onClick={() => {
              setFile(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="shrink-0 rounded-full border-2 border-ink/20 px-3 py-1.5 text-[0.76rem] font-semibold text-ink-2 transition-colors hover:border-ink hover:text-ink"
          >
            Remove
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            accept(e.dataTransfer.files?.[0]);
          }}
          onClick={() => inputRef.current?.click()}
          className={cx(
            "flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-6 py-9 text-center transition-all duration-150",
            dragging
              ? "border-grape bg-grape-soft scale-[1.01]"
              : "border-ink/25 bg-cream/60 hover:border-grape hover:bg-grape-soft/60",
          )}
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#14121A" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 16V4M7 9l5-5 5 5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
          </span>
          <span className="text-[0.92rem] font-bold text-ink">
            Drop your CV here, or <span className="text-grape underline decoration-zest-deep decoration-2 underline-offset-2">browse files</span>
          </span>
          <span className="text-[0.78rem] text-ink-3">
            No CV? No bother — tick the box below and we&rsquo;ll build one with you.
          </span>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx,.rtf,.txt"
        className="sr-only"
        onChange={(e) => accept(e.target.files?.[0])}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Checkbox                                                            */
/* ------------------------------------------------------------------ */

export function Check({
  label,
  className,
  ...rest
}: { label: ReactNode; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className={cx("flex items-start gap-3", className)}>
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        {...rest}
      />
      <label
        htmlFor={id}
        className="mt-[1px] grid h-5 w-5 shrink-0 cursor-pointer place-items-center rounded-md border-2 border-ink bg-white transition-colors peer-checked:bg-zest peer-checked:[&>svg]:scale-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zest-deep"
      >
        <svg viewBox="0 0 16 16" className="h-3 w-3 scale-0 transition-transform" fill="none" stroke="#14121A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8.5l3.5 3.5L13 4.5" />
        </svg>
      </label>
      <label htmlFor={id} className="cursor-pointer text-[0.86rem] leading-relaxed text-ink-2">
        {label}
      </label>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Form shell — fake submit + success state                            */
/* ------------------------------------------------------------------ */

export function FormShell({
  children,
  submitLabel,
  successTitle,
  successBody,
  footnote,
  accent = "zest",
  id,
}: {
  children: ReactNode;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  footnote?: ReactNode;
  accent?: "zest" | "grape" | "coral";
  id?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    window.setTimeout(() => setState("done"), 1100);
  };

  if (state === "done") {
    return (
      <div
        id={id}
        className="animate-pop rounded-5xl border-2 border-ink bg-white p-8 text-center shadow-block-lg sm:p-12"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-zest">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#14121A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 13l5.5 5.5L20 6" />
          </svg>
        </span>
        <h3 className="mt-6 text-3xl font-extrabold sm:text-4xl">{successTitle}</h3>
        <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-ink-2">{successBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="ink" size="md">
            Back to home
          </Button>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="rounded-full border-2 border-ink/25 px-5 py-3 text-[0.9rem] font-semibold text-ink-2 transition-colors hover:border-ink hover:text-ink"
          >
            Send another
          </button>
        </div>
        <p className="mt-7 text-[0.74rem] text-ink-3">
          Demo only — nothing was actually submitted.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate={false}
      className="rounded-5xl border-2 border-ink bg-white p-6 shadow-block-lg sm:p-9"
    >
      <div className="flex flex-col gap-6">{children}</div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        {footnote ? (
          <p className="max-w-sm text-[0.78rem] leading-relaxed text-ink-3">{footnote}</p>
        ) : (
          <span />
        )}
        <Button
          type="submit"
          variant={accent}
          size="lg"
          disabled={state === "sending"}
          arrow={state !== "sending"}
          className={cx("shrink-0", state === "sending" && "opacity-80")}
        >
          {state === "sending" ? (
            <span className="flex items-center gap-2.5">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/25 border-t-ink" />
              Sending…
            </span>
          ) : (
            submitLabel
          )}
        </Button>
      </div>
    </form>
  );
}

export function FormSection({ title, step, children }: { title: string; step: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-grape text-[0.7rem] font-extrabold text-white">
          {step}
        </span>
        <h3 className="font-display text-[1.05rem] font-extrabold tracking-tight">{title}</h3>
        <span className="h-[2px] flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}

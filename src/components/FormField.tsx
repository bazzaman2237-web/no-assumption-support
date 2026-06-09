export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as = "input",
  rows = 4,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
  const id = `field-${name}`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-deep">
        {label}
        {required && <span className="text-primary ml-0.5" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className="input-field mt-1.5"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="input-field mt-1.5"
        />
      )}
    </div>
  );
}

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export async function submitNetlifyForm(formName: string, form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  const data: Record<string, string> = { "form-name": formName };
  formData.forEach((value, key) => {
    data[key] = String(value);
  });

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData(data),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}

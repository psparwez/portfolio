type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

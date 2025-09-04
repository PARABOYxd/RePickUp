import { generateLocalBusinessSchema } from '@/lib/seo';

interface SEOHeadProps {
  schema?: any;
  additionalSchemas?: any[];
}

export function SEOHead({ schema, additionalSchemas = [] }: SEOHeadProps) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const allSchemas = [localBusinessSchema, schema, ...additionalSchemas].filter(Boolean);

  return (
    <>
      {allSchemas.map((schemaData, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      ))}
    </>
  );
}
type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const parts = params.slug.split("-");
  const productId = parts[parts.length - 1];
  const productSlug = parts.slice(0, -1).join("-");

  return (
    <div>
      <h1>{productSlug}</h1>
      <p>ID: {productId}</p>
    </div>
  );
}

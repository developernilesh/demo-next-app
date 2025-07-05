export default function ProdutsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>Product: {id}</div>;
}

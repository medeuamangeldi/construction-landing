import Case from "./_components/case.component";

export async function generateStaticParams(): Promise<any> {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Cases({ params }: { params: { id: number } }) {
  return <Case params={params} />;
}

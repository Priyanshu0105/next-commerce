import { notFound } from "next/navigation";
import BreadCrumb from "@/app/components/BreadCrumb";

type Props = {
  params: Promise<{
    categoryPath: string[];
  }>;
};

export const revalidate = 300; // ISR

export default async function CategoryPage({ params }: Props) {
  const { categoryPath } = await params;

  if (!categoryPath || categoryPath.length === 0) {
    notFound();
  }

  return (
    <div >
      <BreadCrumb categoryPath={categoryPath} />
    </div>
  );
}

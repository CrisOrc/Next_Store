import React from 'react';

interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

async function Categories(props: CategoriesProps) {
  const { categories } = await props.params;

  return (
    <div>
      <h1>{categories}</h1>
    </div>
  );
}

export default Categories;

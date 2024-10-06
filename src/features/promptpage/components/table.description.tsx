interface TableDescription {
  description: {
    weather: string;
    occasion: string;
    clothes: string;
    pants: string;
    shoes: string;
    description: string;
  };
} 

export default function TableDescription({description} : TableDescription) {
  const { weather, occasion, clothes, pants, shoes } = description

  return (
    <div className="">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap w-6">
                Detail Outfit
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Weather
              </th>
              <td className="px-6 py-4">{weather}</td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Occasion
              </th>
              <td className="px-6 py-4">{occasion}</td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Clothes
              </th>
              <td className="px-6 py-4">{clothes}</td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Pants
              </th>
              <td className="px-6 py-4">{pants}</td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Shoes
              </th>
              <td className="px-6 py-4">{shoes}</td>
            </tr>
            <tr className="border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Description
              </th>
              <td className="px-6 py-4">{description.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
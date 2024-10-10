import { DataResponse } from '../types/entity';

interface TableDescription {
    description: DataResponse;
}

export default function TableDescription({ description }: TableDescription) {
    const { weatherCategory, occasionCategory, clothes, pants, shoe, description: desc } = description;

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
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Weather
                            </th>
                            <td className="px-6 py-4">{weatherCategory}</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Occasion
                            </th>
                            <td className="px-6 py-4">{occasionCategory}</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Clothes
                            </th>
                            <td className="px-6 py-4">{clothes}</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Pants
                            </th>
                            <td className="px-6 py-4">{pants}</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Shoes
                            </th>
                            <td className="px-6 py-4">{shoe}</td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Description
                            </th>
                            <td className="px-6 py-4">{desc}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

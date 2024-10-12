import { useEffect, useState } from 'react';
import Header from '../../../components/share/header';
import Card from './card';
import FormPrompt from './form.prompt';
import TableDescription from './table.description';
import Cookies from 'js-cookie';
import { DataResponse, IDataImage, LoggedInUser } from '../types/entity';

export default function PromptPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<LoggedInUser | null>(null);
    const [_data, setData] = useState<DataResponse | null>();
    const [dataImage, setDataImage] = useState<IDataImage | null>();
    const [description, setDescription] = useState<DataResponse | null>(null);

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        const getUser = JSON.parse(localStorage.getItem('user') as string);

        if (accessToken) {
            setUser(getUser);
            setIsAuthenticated(true);
            setUser(getUser);
        } else {
            setIsAuthenticated(false);
            window.location.href = '/login';
        }
    }, []);

    if (!isAuthenticated) return null;

    const defaultDescription: DataResponse = {
        weatherCategory: '',
        occasionCategory: '',
        clothes: '',
        pants: '',
        shoe: '',
        description: '',
        imageOutfit: '',
        _id: '',
    };

    const handleDataResponse = (data: DataResponse) => {
        setData(data);
        setDataImage(data);
        setDescription(data);
    };

    return (
        <>
            <Header />
            <section className="container mx-auto p-5">
                <h1 className="text-3xl font-semibold">Hallo {user?.username} 👋</h1>
                <FormPrompt getData={handleDataResponse} />

                <div className="grid grid-cols-2 gap-4 mt-5">
                    <Card dataImage={dataImage || null} />
                    {/* <Card img={data?.imageOutfit || ''} /> */}
                    {/* {dataDescription !== null ? <TableDescription description={dataDescription} /> : <TableDescription description={defaultDescription} />} */}
                    <TableDescription description={description || defaultDescription} />
                </div>
            </section>
        </>
    );
}

import { useEffect, useState } from 'react';
import Header from '../../../components/share/header';
import Card from './card';
import FormPrompt from './form.prompt';
import TableDescription from './table.description';
import Cookies from 'js-cookie';
import { DataResponse, LoggedInUser } from '../types/entity';

export default function PromptPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<LoggedInUser | null>(null);
    const [data, setData] = useState<DataResponse | null>();
    const [image, setImage] = useState<string>('');
    const [description, setDescription] = useState<DataResponse | null>(null);

    useEffect(() => {
        const token = Cookies.get('token');
        const accessToken = Cookies.get('accessToken');

        const userCookie = Cookies.get('user');
        const parsedUserCookie = userCookie ? JSON.parse(userCookie) : null;

        const getUser = JSON.parse(localStorage.getItem('user') as string);

        if (token) {
            setIsAuthenticated(true);
            setUser(getUser);
        } else if (accessToken) {
            setIsAuthenticated(true);
            setUser(parsedUserCookie);
        } else {
            setIsAuthenticated(false);
            window.location.href = '/login';
        }
    }, []);

    if (!isAuthenticated) return null;

    // const description = {
    //   weather: 'rain',
    //   occasion: 'formal',
    //   clothes: 't-shirt',
    //   pants: 'jeans',
    //   shoes: 'sneakers',
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe nam vel quod doloremque reprehenderit officia placeat, eos at omnis rerum voluptas mollitia a amet quos aspernatur quo veritatis atque?"
    // }

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
        setImage(data?.imageOutfit);
        setDescription(data);
    };
    // const image = output;
    // const image = null
    // const dataDescription = defaultDescription;
    // const dataDescription = null
    console.log(data);
    // console.log(image);
    // console.log(description);

    return (
        <>
            <Header />
            <section className="container mx-auto p-5">
                <h1 className="text-3xl font-semibold">Hallo {user?.username} 👋</h1>
                <FormPrompt getData={handleDataResponse} />

                <div className="grid grid-cols-2 gap-4 mt-5">
                    {image !== null ? <Card img={data?.imageOutfit || ''} /> : <Card img="" />}

                    {/* <Card img={data?.imageOutfit || ''} /> */}
                    {/* {dataDescription !== null ? <TableDescription description={dataDescription} /> : <TableDescription description={defaultDescription} />} */}
                    <TableDescription description={description || defaultDescription} />
                </div>
            </section>
        </>
    );
}

import { useHistory } from 'react-router-dom';
import errorImg from '../assets/error.png';

const ErrorScreen = () => {
    const history = useHistory();

    return (
        <main className="h-screen banner">
            <div className="max-w-screen-xl px-6 py-20 mx-auto">
                <div className="flex flex-col items-center justify-center pt-24 h-3/4">
                    <img className="object-contain w-96" src={errorImg} alt="error" />

                    <button className="px-8 py-2 mt-24 text-white transition duration-300 transform rounded-full bg-primary focus:outline-none poppins hover:scale-105" onClick={() => history.push('/')}>Go back to home</button>
                </div>
                </div>
        </main>
    )
}

export default ErrorScreen

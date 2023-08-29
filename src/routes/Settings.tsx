import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Link } from 'react-router-dom';

const Home = () => {
    return (<>
        <div className='w-full h-full grid place-content-center'>
            <Button>Hello</Button> <ModeToggle></ModeToggle>
            <h2>Settings</h2>
            <div className='flex items-center w-full'>
                <Link to='/'>Home</Link>
                <Link to='/settings'>Settings</Link>
            </div>
        </div>
    </>);
}

export default Home;
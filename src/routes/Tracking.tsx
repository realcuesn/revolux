import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Link } from 'react-router-dom';
import AppNav from '@/components/app/app-sidebar';

const Tacking = () => {
    return (<>
        <div className='w-full h-full flex flex-col'>
            <AppNav></AppNav>

            <div className='h-full w-full'>
                <Button>Hello</Button> <ModeToggle></ModeToggle>
                <h2>Tracking</h2>
                <div className='flex items-center gap-x-5 w-full'>
                    <Link to='/'>Home</Link>
                    <Link to='/settings'>Settings</Link>
                </div>
            </div>

        </div>
    </>);
}

export default Tacking;
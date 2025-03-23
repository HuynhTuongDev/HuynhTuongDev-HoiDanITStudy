import { useSelector } from 'react-redux';
import VideoHomepage from '../../assets/video-homepage.mp4'
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();
    return (
        <div className="homepage-container">
            {/* autoPlay="autoplay" loop="" width="750" height="500" */}
            <video autoPlay muted loop>
                <source
                    src={VideoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>There's a better way to ask</div>
                <div className='title-2'>
                    You don't wwant to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy.
                </div>
                <div className='title-3'>
                    {
                        isAuthenticated === false ?
                            <button onClick={() => navigate('/login')}>Get's started. It's free</button>
                            :
                            <button onClick={() => navigate('/users')}>Doing Quiz Now</button>
                    }

                </div>
            </div>
        </div>
    )
}
export default HomePage;
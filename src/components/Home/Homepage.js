import VideoHomepage from '../../assets/video-homepage.mp4'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            {/* autoPlay="autoplay" loop="" width="750" height="500" */}
            <video autoPlay muted loop>
                <source
                    src={VideoHomepage}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
export default HomePage;
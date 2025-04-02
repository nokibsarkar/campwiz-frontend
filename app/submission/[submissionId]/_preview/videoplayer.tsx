import VideoPlayer from 'next-video/player';
type VideoAppProps = {
    src: string;
    poster: string;
}
const VideoApp = ({ src, poster }: VideoAppProps) => {
    return (
        <div style={{ maxHeight: '90%', maxWidth: '700px', margin: 'auto' }}>
            <VideoPlayer
                controls={true}
                src={src}
                poster={poster}
            // style={{ width: "100%", height: "auto", maxWidth: '900px', maxHeight: '400px' }}
            // className='h-full'
            // onReady={this.onPlayerReady.bind(this)}
            // onPlay={this.onVideoPlay.bind(this)}
            // onPause={this.onVideoPause.bind(this)}
            // onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
            // onSeeking={this.onVideoSeeking.bind(this)}
            // onSeeked={this.onVideoSeeked.bind(this)}
            // onEnd={this.onVideoEnd.bind(this)}
            />
        </div>
    );
}
export default VideoApp;
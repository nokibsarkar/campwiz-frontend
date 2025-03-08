import VideoPlayer from 'next-video/player';
type VideoAppProps = {
    src: string;
    poster: string;
}
const VideoApp = ({ src, poster }: VideoAppProps) => {
    // onPlayerReady(player: { play: () => void }) {
    //     console.log("Player is ready: ", player);
    //     this.player = player;
    // }

    // onVideoPlay(duration: number) {
    //     console.log("Video played at: ", duration);
    // }

    // onVideoPause(duration: number) {
    //     console.log("Video paused at: ", duration);
    // }

    // onVideoTimeUpdate(duration: number) {
    //     console.log("Time updated: ", duration);
    // }

    // onVideoSeeking(duration: number) {
    //     console.log("Video seeking: ", duration);
    // }

    // onVideoSeeked(from: number, to: number) {
    //     console.log(`Video seeked from ${from} to ${to}`);
    // }

    // onVideoEnd() {
    //     console.log("Video ended");
    // }

    return (
        <div>
            <VideoPlayer
                controls={true}
                src={src}
                poster={poster}
                style={{ width: "100%", height: "auto", maxWidth: '500px' }}
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
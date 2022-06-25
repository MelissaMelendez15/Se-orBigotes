import catVideo from './video.mp4'


const Video = () => {

    return (
        
        
        <div style={{ padding: '50px', marginTop: '20%' }}>

            <video className='video' style={{ width: '100%', height:'100%', overflow: 'hidden', border: '3px solid trasnparent', borderRadius: '15px' }} autoPlay={true} loop="loop" muted >

                 <source src={catVideo}  type="video/mp4"/>
                 
            </video> 
            
          
        
        </div>
           
    )
}


export default Video
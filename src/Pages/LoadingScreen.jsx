import { ScaleLoader } from 'react-spinners'

const LoadingScreen = () => {
  return (
    <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "red",
        justifyContent: "center",
        alignItems: "center"
    }}>
            <ScaleLoader />
    </div>
  )
}

export default LoadingScreen



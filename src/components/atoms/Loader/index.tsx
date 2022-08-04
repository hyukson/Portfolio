import { useEffect, useState } from "react"
import { LoaderStyled } from "./styled"

const Loader = () => {
  const [isView, setIsView] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsView(false), 2800);
  }, []);

  return <LoaderStyled className={isView ? "view" : ''}>
    <div className="box">
      <p>Jang Hyuk Soo Portfolio</p>
      
      <div className="blurBox">
        <div className="blur"></div>
        <div className="pick"></div>
        <div className="blur"></div>
      </div>
    </div>
  </LoaderStyled>
}

export default Loader;
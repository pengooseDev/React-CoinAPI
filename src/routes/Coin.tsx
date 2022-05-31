//query에 params를 잡아내기 위해선 아래의 것을 사용.
import { useParams } from "react-router-dom";
//params에서 object를 return함.
//key값은 react-router-dom의 Route에서 정한, path "/:이름"으로 옴.

interface RouteParams {
    coinId: string;
}

const Coin = () => {
    //Params에 Type 선언 방법.
    const { coinId } = useParams<keyof RouteParams>() as RouteParams;
    //const { coinId } = useParams<{coinId: string}>()
    console.log(coinId);
    return <h1>Coin</h1>;
};

export default Coin;

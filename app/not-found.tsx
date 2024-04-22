import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata : Metadata = {
    title: "Not found",
};

export default function NotFound(){
    // 404 오류 페이지 제작 가능.
    return (
        <div>
            <h1>Not found!!!!!</h1>
        </div>
    )
}
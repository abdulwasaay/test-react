import ButtonLatest from "./Button"

const InfoSec = () => {
    return (
        <div className="w-full p-[80px]" >
            <div className="flex justify-center gap-8 items-center">
                <h1 className="font-bold text-5xl w-[1800px] leading-tight"><span className="text-[#E01923]">Appicoders</span>– # <span className="text-[#E01923]">1</span>. Mobile App & Web Development Company in USA</h1>
                <div>
                    <p className="text-lg">Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows. </p>
                    <ButtonLatest
                    title="READ MORE"
                    classes="mt-[40px] py-[14px] text-white px-[40px] rounded-lg bg-gradient-to-r from-[#FF0000] to-black filter"
                  />
                </div>
            </div>
        </div>
    )
}

export default InfoSec
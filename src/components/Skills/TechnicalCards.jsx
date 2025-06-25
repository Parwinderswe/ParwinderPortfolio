import TechnicalCard from "./TechnicalCard"

const langProficiency = [{
    name:"JavaScript",
    percent:95,
},
{
    name:"React",
    percent:95,
},
{
    name:"TypeScript",
    percent:80,
},
{
    name:"Java",
    percent:90,
},
{
    name:"Tailwind CSS",
    percent:85,
},
]

const TechnicalCards=()=> {
  return (
    <div className="max-w-3xl mx-auto mb-24">
         <h3 className="mb-8 text-3xl font-bold text-left">Technical Proficiency</h3>
                    
    {langProficiency.map((lang)=>(
        <TechnicalCard
        language={lang.name}
        percent={lang.percent}
        />
    ))}
    </div>
    
  )
}

export default TechnicalCards
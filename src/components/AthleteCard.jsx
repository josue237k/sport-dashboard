import { Levels, Specialities, Sports } from "../utils/helpers";


const AthletesCard = ({ athlete }) => {
    const level = Levels.find(lvl => lvl.levelID === athlete.levelID)
    const speciality = Specialities.find(spec => spec.specialityID === athlete.specialityID)
    const enrolledSportNames = athlete.enrollSports.map(sportId => {
        const sport = Sports.find(sp => sp.id === sportId);
        return sport ? sport.name : "unknown sport"
    }).join(',')

    return (
        <div className="athlete-card">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h2 className="card-title">{athlete.name}</h2>
                    <p className="card-text"><strong>Age: </strong>{athlete.age}</p>
                    <p className="card-text"><strong>Gender: </strong>{athlete.gender}</p>
                    <p className="card-text"><strong>Level: </strong>{level ? level.name : "unknown level"}</p>
                    <p className="card-text"><strong>Speciality: </strong>{speciality ? speciality.name : "unknown Speciality"}</p>
                    <p className><strong>Enrolled Sports: </strong>{enrolledSportNames}</p>
                </div>
            </div>
            
        </div>
    )
}
export default AthletesCard;
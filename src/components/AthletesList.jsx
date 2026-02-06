import { useState } from "react";
import { Athletes } from "../utils/helpers";
import AthletesCard from "./AthleteCard";
const AtheleteList = () => {
    const [searchTerm, SetSearchTerms] = useState("");
    const [filteredAthletes, setFilteredAthletes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            setFilteredAthletes([])
            return;
        } {

            const filter = Athletes.filter(ath =>
                ath.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredAthletes(filter)
        }
    }
    const handleKeypress = (k) => {
        if (k.key === "Enter") {
            handleSubmit();
        }
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sport Dashboard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                id="search"
                                value={searchTerm}
                                onChange={(s) => SetSearchTerms(s.target.value)}
                                onKeyDown={handleKeypress} />
                            <button class="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="athlete-grid">
                {filteredAthletes.length > 0 ?
                    filteredAthletes.map(ath =>
                        <AthletesCard key={ath.id} athlete={ath} />
                    ) : (
                        <p>search for an athlete </p>
                    )
                }
            </div>
        </div>
    )
}
export default AtheleteList;
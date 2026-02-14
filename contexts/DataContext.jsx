import React, { createContext, useContext, useState } from 'react';
import { Athletes, Sports, Specialities, Levels, Users as InitialUsers } from '../utils/helpers.js';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [athletesList, setAthletes] = useState(Athletes);
  const [sportsList, setSports] = useState(Sports);
  const [specialitiesList, setSpecialities] = useState(Specialities);

  const addAthlete = (athlete) => setAthletes([...athletesList, { ...athlete, id: Date.now() }]);
  const updateAthlete = (id, data) => setAthletes(athletesList.map(a => a.id === id ? { ...a, ...data } : a));
  const deleteAthlete = (id) => setAthletes(athletesList.filter(a => a.id !== id));

  const addSport = (sport) => setSports([...sportsList, { ...sport, id: Date.now() }]);
  const updateSport = (id, data) => setSports(sportsList.map(s => s.id === id ? { ...s, ...data } : s));
  const deleteSport = (id) => setSports(sportsList.filter(s => s.id !== id));

  const addSpeciality = (spec) => setSpecialities([...specialitiesList, { ...spec, specialityID: Date.now() }]);
  const deleteSpeciality = (id) => setSpecialities(specialitiesList.filter(s => s.specialityID !== id));

  return (
    <DataContext.Provider value={{
      athletes: athletesList,
      sports: sportsList,
      specialities: specialitiesList,
      levels: Levels,
      users: InitialUsers,
      addAthlete, updateAthlete, deleteAthlete,
      addSport, updateSport, deleteSport,
      addSpeciality, deleteSpeciality
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
import React from "react";

const Formulaire = () => {
    return (
        <>
        <div className="container">
        <form id="registrationForm">
       <label htmlFor="firstName">Prénom:</label>
       <input type="text" id="firstName" name="firstName" required />
       <label htmlFor="lastName">Nom:</label>
        <input type="text" id="lastName" name="lastName" required />

        <label htmlFor="dob">Date de naissance:</label>
        <input type="date" id="dob" name="dob" required />

        <label htmlFor="birthPlace">Lieu de naissance:</label>
        <input type="text" id="birthPlace" name="birthPlace" required />

        <label htmlFor="gender">Sexe:</label>
        <select id="gender" name="gender" required>
            <option value="" disabled selected>Sélectionnez</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
        </select>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required/>

        <label htmlFor="confirmPassword">Confirmation du mot de passe:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required/>

        <div className="error" id="errorMessage"></div>

        <input type="submit" value="S'inscrire"/>
        </form>
        </div>
        </>
    );
    
}
export default Formulaire

<template>
    <div class="wrapper">
        <form @submit.prevent = signup()>
            <img src="/assets/img/groupomania-logo.png" alt="Groupomania logo">
            <nav><router-link to="/">Se connecter</router-link> | <router-link to="/signup" class="active">S'inscrire</router-link></nav>
            <label for="signup-nom">Nom :</label>
            <input id="signup-nom" type="text" placeholder="Nom" required>
            
            <label for="signup-prenom">Prenom :</label>
            <input id="signup-prenom" type="text" placeholder="Prenom" required>

            <label for="signup-password">Mot de passe :</label>
            <input id="signup-password" type="password" placeholder="Mot de passe" required>

            <label for="signup-password-verification">Vérification du mot de passe :</label>
            <input id="signup-password-verification" type="password" placeholder="Vérifier mot de passe" required>

            <label for="signup-email">Email :</label>
            <input id="signup-email" type="email" placeholder="Email" required>

            <div class="error-message">{{message}}</div>

            <button id="signup-btn" type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignupForm',
    data() {
        return {
            message: "",
        };
    },
    methods: {
        signup(){
            const nom = document.getElementById("signup-nom").value;
            const prenom = document.getElementById("signup-prenom").value;
            const password = document.getElementById("signup-password").value;
            const passwordVerif = document.getElementById("signup-password-verification").value;
            const email = document.getElementById("signup-email").value;
            if(password === passwordVerif){
                axios.post(`${this.$apiUrl}/auth/signup`,
                    {
                        nom,
                        prenom,
                        password,
                        email
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(res => {
                    if(res.status === 201) {
                         location.href = '/';
                    }
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        this.message = "Email non disponible.";
                    }  
                });
            }
            else if( password != passwordVerif){
                this.message = "Vérifier le mot de passe";
            }
            
        }
    }
}
</script>
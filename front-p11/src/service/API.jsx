
const baseURL = "http://localhost:3001/api/v1";

// Les infos nécessaires pour chaque requête: url, méthode,authentification
const fetchInfo = {
    getToken: {
        url: "/user/login",
        method: "post",
        auth: false,
    },
    getProfile: {
        url: "/user/profile",
        method: "post",
        auth: true,
    },
    putUserName: {
        url: "/user/profile",
        method: "put",
        auth: true,
    },
};

export const callAPI = async (infos, token, data = {}) => {
    const callAPIData = fetchInfo[infos];

    if (!callAPIData) {
        console.error("Erreur à l'appel de connexion à l'API");
        return;
    }

    const headers = { "Content-Type": "application/json", };

    if (callAPIData.auth) { headers.Authorization = `Bearer ${token}`; }

    try {
        const response = await fetch(
            `${baseURL}${callAPIData.url}`,
            {
                method: callAPIData.method,
                headers,
                body: JSON.stringify(data)
            },
        )

        return response.json();

    } catch (error) {
        console.error("Erreur lors de la connexion à l'API :", error);
        throw error;
    }
};

export default callAPI;


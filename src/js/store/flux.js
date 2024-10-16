const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlBase: 'https://playground.4geeks.com/contact/agendas',
            contacts: [],
            contact: {
                id: "1",
                name: "Anthonny Jhoseph Miranda Prieto",
                email: "anthonnymiranda9@gmail.com",
                phone: "321-9007993",
                address: "Carrera 95 # 76-86"
            }
        },
        actions: {
            getAllContacts: async () => {
                try {
                    let response = await fetch(`${getStore().urlBase}/Anthonny/contacts`);
                    let data = await response.json();

                    if (response.ok) {
                        setStore({ contacts: data.contacts });
                    } else {
                        getActions().createAgenda();
                    }
                } catch (error) {
                    console.log("Error trying to bring back the info: ", error);
                }
            },

            createAgenda: async () => {
                try {
                    let response = await fetch(`${getStore().urlBase}/Anthonny`, {
                        method: "POST"
                    });
                    if (response.ok) {
                        getActions().getAllContacts();
                    }
                } catch (error) {
                    console.log(`Error en la creación de la agenda: ${error}`);
                }
            },

            createContact: async (contact) => {
                try {
                    let response = await fetch(`${getStore().urlBase}/Anthonny/contacts`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });

                    if (response.ok) {
                        getActions().getAllContacts();
                    } else {
                        console.log("Failed to create contact", response.statusText);
                    }
                } catch (error) {
                    console.log(error, "....This isn't working out!");
                }
            },

            deleteContact: async (id) => {
                try {
                    let response = await fetch(`${getStore().urlBase}/Anthonny/contacts/${id}`, {
                        method: "DELETE",
                    });

                    if (response.ok) {
                        getActions().getAllContacts();
                    }
                } catch (error) {
                    console.error("Failed to delete contact:", error);
                }
            },

            updateContact: async (id, contact) => {
                try {
                    let response = await fetch(`${getStore().urlBase}/Anthonny/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });

                    if (response.ok) {
                        getActions().getAllContacts();
                    }
                } catch (error) {
                    console.error("Failed to update contact:", error);
                }
            }
        }
    };
};

export default getState;

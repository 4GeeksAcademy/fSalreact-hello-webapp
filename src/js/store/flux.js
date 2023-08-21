const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
					users: [
					]		
		},
		actions: {
					
					getInicialContacts: () => {
					
						const store = getStore();
						
						setStore({ users: [{
							name: "Amanda",
							email: "amanda@example.com",
							phone: "87651234",
							address: "Moravia"
						}] });
					},

					addContact: (newContact) => {
						
						const store = getStore();
						const contact = store.users.concat(newContact);

				
						setStore({ users: contact });
						
					},

					
					update: (index, newContact) => {
						const store = getStore();
					console.log(index, newContact)
						const contact = store.users.map((c, i) => {
							if (index == i) {
								c = newContact
							}
							return c
						});

					console.log("test", contact)
						setStore({ users: contact });
					},

					
					delete: (index) => {
						
						const store = getStore();

						const contact = store.users.filter((c, i) => {
							return index !== i
						});
						console.log(index)

					
						setStore({ users: contact });
					}
		}
	}
}

export default getState;



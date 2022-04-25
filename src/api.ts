
export async function post(url: string, body: any) {
    const csrfToken = await getCsrfToken();

    const response = await fetch(url, {
        method: "POST",
        body: body,
        headers: {
            'X-CSRFToken': csrfToken
        },
    });

    const data = await response.json();

    if (response.ok) return data

    throw new Error(data.msg)
}

export async function getCsrfToken() {
    const response = await fetch("/csrf/", {
        credentials: 'include',
    });
    const data = await response.json();

    return data.token;
}


export async function createAppointment(body) {
    return await post("/api/appointments/create/", body);
}

export async function fetchProviders(criteria) {
    const url = `/api/providers?full_name=${criteria}&specialty=${criteria}`;
    const response = await fetch(url);
    return response.json();
}


export async function createProvider(body) {
    return await post("/api/providers/create/", body)
}



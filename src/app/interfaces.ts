export interface AcercaDe {

    id: string;
    tituloPrincipal: string;
    fotoPerfil:string;
    nombre: string;
    titulo:string;
    parrafo:string;
    
}

export interface AcercaDe2 {

    id: string;
    tituloPrincipal: string;
    fPerfil:string;
    nombre:string;
    titulo: string;
    parrafo: string;

}
export interface Experiencia {

    id: string;
    tituloPrincipal: string;
    titulo: string;
    parrafo:string;
}

export interface Educacion {

    id: string;
    titulo: string;
    parrafo:string;
}

export interface Skills {

    id: string;
    nombre: string;
    porcentaje: string;
}

export interface Proyectos {

    id: string;
    nombre: string;
    url: string;
}

export interface Login {

    userName: string;
    password: string;
}
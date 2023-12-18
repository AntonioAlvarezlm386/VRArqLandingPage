import { facebook, instagram } from '../assets/svg';
import { creativity, funcionality, innovation, serv1, serv2, serv3, serv4 } from '../assets/img';

export const socialNet = [
    {label : "facebook", icon: facebook, href: 'https://www.facebook.com/profile.php?id=100083574302212'},
    {label : "instagram", icon: instagram, href: 'https://www.facebook.com/profile.php?id=100083574302212'}
]


export const heroCards = [
    {label: "Creatividad", icon: creativity},
    {label: "Funcionalidad", icon: funcionality},
    {label: "Innovación", icon: innovation}
]


export const services = [
    {
        icon: serv2,
        title: "Dibujo arquitectónico",
        description: "Expertos en el arte del dibujo, trazamos lineas que materializan tus ideas."
    },
    {
        icon: serv1,
        title: "Proyectos arquitectónicos",
        description: "Fusionamos creatividad y funcionalidad para desarrollar espacios innovadores."
    },
    {
        icon: serv3,
        title: "Digitalización de planos",
        description: "Llevamos la arquitectura al mundo digital. Convierte tus planos en modelos 3D realistas y precisos."
    },
    {
        icon: serv4,
        title: "Remodelaciones",
        description: "Transformamos espacios existentes en nuevas experiencias. Ya sea revitalizando ambientes o ampliando estructuras."
    }
]
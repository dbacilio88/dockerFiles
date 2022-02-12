CREATE SEQUENCE public.persona_id_seq;

CREATE TABLE public.persona(
    id BIGINT NOT NULL DEFAULT nextval('public.persona_id_seq'),
    codigo VARCHAR(10) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    CONSTRAINT persona_pk PRIMARY KEY (id)
);

ALTER SEQUENCE public.persona_id_seq OWNED BY public.persona.id;


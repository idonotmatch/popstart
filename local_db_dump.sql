--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8 (Homebrew)
-- Dumped by pg_dump version 15.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: price_history; Type: TABLE; Schema: public; Owner: dangnguyen
--

CREATE TABLE public.price_history (
    price_id integer NOT NULL,
    product_id integer,
    price numeric(10,2) NOT NULL,
    availability character varying(50),
    scraped_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    currency character varying(3),
    retailer character varying(50),
    sale_price numeric
);


ALTER TABLE public.price_history OWNER TO dangnguyen;

--
-- Name: price_history_price_id_seq; Type: SEQUENCE; Schema: public; Owner: dangnguyen
--

CREATE SEQUENCE public.price_history_price_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.price_history_price_id_seq OWNER TO dangnguyen;

--
-- Name: price_history_price_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dangnguyen
--

ALTER SEQUENCE public.price_history_price_id_seq OWNED BY public.price_history.price_id;


--
-- Name: product_details; Type: TABLE; Schema: public; Owner: dangnguyen
--

CREATE TABLE public.product_details (
    detail_id integer NOT NULL,
    product_id integer,
    description text,
    rating numeric(3,2),
    ratings_total integer,
    is_prime boolean,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.product_details OWNER TO dangnguyen;

--
-- Name: product_details_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: dangnguyen
--

CREATE SEQUENCE public.product_details_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_details_detail_id_seq OWNER TO dangnguyen;

--
-- Name: product_details_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dangnguyen
--

ALTER SEQUENCE public.product_details_detail_id_seq OWNED BY public.product_details.detail_id;


--
-- Name: product_reviews; Type: TABLE; Schema: public; Owner: dangnguyen
--

CREATE TABLE public.product_reviews (
    review_id integer NOT NULL,
    product_id integer,
    user_id integer,
    rating numeric,
    review_text text,
    review_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.product_reviews OWNER TO dangnguyen;

--
-- Name: product_reviews_review_id_seq; Type: SEQUENCE; Schema: public; Owner: dangnguyen
--

CREATE SEQUENCE public.product_reviews_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_reviews_review_id_seq OWNER TO dangnguyen;

--
-- Name: product_reviews_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dangnguyen
--

ALTER SEQUENCE public.product_reviews_review_id_seq OWNED BY public.product_reviews.review_id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: dangnguyen
--

CREATE TABLE public.products (
    product_id integer NOT NULL,
    retailer_id character varying(50) NOT NULL,
    source character varying(20) NOT NULL,
    title text NOT NULL,
    brand character varying(100),
    image_url text,
    link text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.products OWNER TO dangnguyen;

--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: dangnguyen
--

CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_id_seq OWNER TO dangnguyen;

--
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dangnguyen
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;


--
-- Name: retailers; Type: TABLE; Schema: public; Owner: dangnguyen
--

CREATE TABLE public.retailers (
    retailer_id integer NOT NULL,
    name character varying(100) NOT NULL,
    website character varying(255),
    api_key character varying(100)
);


ALTER TABLE public.retailers OWNER TO dangnguyen;

--
-- Name: retailers_retailer_id_seq; Type: SEQUENCE; Schema: public; Owner: dangnguyen
--

CREATE SEQUENCE public.retailers_retailer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.retailers_retailer_id_seq OWNER TO dangnguyen;

--
-- Name: retailers_retailer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dangnguyen
--

ALTER SEQUENCE public.retailers_retailer_id_seq OWNED BY public.retailers.retailer_id;


--
-- Name: search_history; Type: TABLE; Schema: public; Owner: dangnguyen
--

CREATE TABLE public.search_history (
    search_id integer NOT NULL,
    search_term character varying(255) NOT NULL,
    source character varying(20) NOT NULL,
    sort_by character varying(50),
    page integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.search_history OWNER TO dangnguyen;

--
-- Name: search_history_search_id_seq; Type: SEQUENCE; Schema: public; Owner: dangnguyen
--

CREATE SEQUENCE public.search_history_search_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.search_history_search_id_seq OWNER TO dangnguyen;

--
-- Name: search_history_search_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dangnguyen
--

ALTER SEQUENCE public.search_history_search_id_seq OWNED BY public.search_history.search_id;


--
-- Name: price_history price_id; Type: DEFAULT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.price_history ALTER COLUMN price_id SET DEFAULT nextval('public.price_history_price_id_seq'::regclass);


--
-- Name: product_details detail_id; Type: DEFAULT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.product_details ALTER COLUMN detail_id SET DEFAULT nextval('public.product_details_detail_id_seq'::regclass);


--
-- Name: product_reviews review_id; Type: DEFAULT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.product_reviews ALTER COLUMN review_id SET DEFAULT nextval('public.product_reviews_review_id_seq'::regclass);


--
-- Name: products product_id; Type: DEFAULT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- Name: retailers retailer_id; Type: DEFAULT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.retailers ALTER COLUMN retailer_id SET DEFAULT nextval('public.retailers_retailer_id_seq'::regclass);


--
-- Name: search_history search_id; Type: DEFAULT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.search_history ALTER COLUMN search_id SET DEFAULT nextval('public.search_history_search_id_seq'::regclass);


--
-- Data for Name: price_history; Type: TABLE DATA; Schema: public; Owner: dangnguyen
--

COPY public.price_history (price_id, product_id, price, availability, scraped_at, currency, retailer, sale_price) FROM stdin;
\.


--
-- Data for Name: product_details; Type: TABLE DATA; Schema: public; Owner: dangnguyen
--

COPY public.product_details (detail_id, product_id, description, rating, ratings_total, is_prime, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: product_reviews; Type: TABLE DATA; Schema: public; Owner: dangnguyen
--

COPY public.product_reviews (review_id, product_id, user_id, rating, review_text, review_date) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dangnguyen
--

COPY public.products (product_id, retailer_id, source, title, brand, image_url, link, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: retailers; Type: TABLE DATA; Schema: public; Owner: dangnguyen
--

COPY public.retailers (retailer_id, name, website, api_key) FROM stdin;
\.


--
-- Data for Name: search_history; Type: TABLE DATA; Schema: public; Owner: dangnguyen
--

COPY public.search_history (search_id, search_term, source, sort_by, page, created_at) FROM stdin;
\.


--
-- Name: price_history_price_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dangnguyen
--

SELECT pg_catalog.setval('public.price_history_price_id_seq', 1, false);


--
-- Name: product_details_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dangnguyen
--

SELECT pg_catalog.setval('public.product_details_detail_id_seq', 1, false);


--
-- Name: product_reviews_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dangnguyen
--

SELECT pg_catalog.setval('public.product_reviews_review_id_seq', 1, false);


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dangnguyen
--

SELECT pg_catalog.setval('public.products_product_id_seq', 1, false);


--
-- Name: retailers_retailer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dangnguyen
--

SELECT pg_catalog.setval('public.retailers_retailer_id_seq', 1, false);


--
-- Name: search_history_search_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dangnguyen
--

SELECT pg_catalog.setval('public.search_history_search_id_seq', 1, false);


--
-- Name: price_history price_history_pkey; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.price_history
    ADD CONSTRAINT price_history_pkey PRIMARY KEY (price_id);


--
-- Name: product_details product_details_pkey; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.product_details
    ADD CONSTRAINT product_details_pkey PRIMARY KEY (detail_id);


--
-- Name: product_reviews product_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_pkey PRIMARY KEY (review_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- Name: products products_retailer_id_source_key; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_retailer_id_source_key UNIQUE (retailer_id, source);


--
-- Name: retailers retailers_pkey; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.retailers
    ADD CONSTRAINT retailers_pkey PRIMARY KEY (retailer_id);


--
-- Name: search_history search_history_pkey; Type: CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.search_history
    ADD CONSTRAINT search_history_pkey PRIMARY KEY (search_id);


--
-- Name: idx_price_history_product_id; Type: INDEX; Schema: public; Owner: dangnguyen
--

CREATE INDEX idx_price_history_product_id ON public.price_history USING btree (product_id);


--
-- Name: idx_price_history_scraped_at; Type: INDEX; Schema: public; Owner: dangnguyen
--

CREATE INDEX idx_price_history_scraped_at ON public.price_history USING btree (scraped_at);


--
-- Name: idx_products_retailer_source; Type: INDEX; Schema: public; Owner: dangnguyen
--

CREATE INDEX idx_products_retailer_source ON public.products USING btree (retailer_id, source);


--
-- Name: idx_search_history_search_term; Type: INDEX; Schema: public; Owner: dangnguyen
--

CREATE INDEX idx_search_history_search_term ON public.search_history USING btree (search_term);


--
-- Name: price_history price_history_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.price_history
    ADD CONSTRAINT price_history_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- Name: product_details product_details_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.product_details
    ADD CONSTRAINT product_details_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- Name: product_reviews product_reviews_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dangnguyen
--

ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- PostgreSQL database dump complete
--


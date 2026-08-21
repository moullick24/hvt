# HealthVoitho — Website content and implementation reference (v3)

This document reflects the current website implementation. It is the source of truth for page structure, approved copy direction, shared visual behavior, and items that must be resolved before publication.

## Positioning

HealthVoitho is the technology entity of the Esperer Group. It develops intelligent systems intended to make cancer care earlier, closer, and more usable through AI, longitudinal oncology data, domain expertise, and portable diagnostic pathways.

The website is written for scientists, clinicians, research labs, hospitals, medtech teams, institutions, and prospective collaborators. It is not a product catalogue, consumer screening service, CRO brochure, or online shop.

Copy should remain calm, specific, and research-led. Describe the scientific problem and the evidence required to act on it; do not overstate an AI output, invent a partnership, or invite patients to use an unapproved service.

## Shared design system and behavior

- Display type: Prata.
- Body and interface type: Rethink Sans.
- Page background: white, with animated contour lines shared across the landing, Science, Partnerships, People, and Contact pages.
- Heading colour: deep blue (`#1d315f`) with restrained teal-to-moss gradient accents.
- Header: transparent at the top of every page and white with blur immediately after scrolling. The enlarged HealthVoitho logo links to the top of the landing page.
- Navigation: Science · Partnerships · People, with Contact as the utility button.
- Group and Approach pages and navigation entries have been removed.
- A fixed back-to-top control appears at the bottom right after the visitor scrolls down.
- Motion respects reduced-motion preferences.
- Eyebrow headings are not used on the primary interior-page heroes.

## Site map

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Establish the mission, evidence gap, scientific approach, name, and latest work. |
| Science | `/science` | Explain the four connected scientific fields behind the work. |
| Partnerships | `/partnerships` | Present the collaboration model, an illustrative partner treatment, and partnership principles. |
| People | `/people` | Introduce the leadership team. |
| Contact | `/contact` | Provide a partner-focused contact form. |

# Home `/`

## Hero

**H1 (locked):**

> Intelligent Healthcare in Cancer Ecosystem. Accessible Everywhere.

**Deck:**

> We build the intelligence that helps cancer be found earlier, understood sooner, and faced closer to home.

**Primary CTA:** Science → `/science`

**Secondary CTA:** Partner with us → `/partnerships`

The hero uses a three-image editorial composition: a biomedical scientist, a patient, and a green-toned pipette/research image. The page contour animation continues behind the hero and the following facts section so both read as one visual field.

## Cancer facts

**H2:**

> Cancer is becoming a family fact
>
> and we're here to change it.

The second line uses the site gradient. The figures count up once when the section enters the viewport:

- **72%** of lung cancers are found when the disease is already advanced.
- **28%** of people with breast cancer are unaware it is there.
- **1 in 5** cancer deaths are driven by malnutrition — not by the tumour alone.

These statements require approved citations before publication.

## AI + Domain Expertise

This is a dark 40:60 split section. The left side uses a looping spheroid-invasion video; the right side contains the scientific proposition and three vertically arranged elements.

**H2:** AI + Domain Expertise

> We combine longitudinal oncology data, AI-driven causal modelling and deep domain expertise into solutions our partners use to validate targets, biomarkers and diagnostic pathways before committing capital downstream.

1. **AI-Driven Causal Modelling** — We apply AI/ML and causal inference to real-world oncology data to identify disease targets and patient subtypes, and validate them before a partner commits lab or clinical resources.
2. **Longitudinal Oncology Data** — Structured data spanning the full disease journey, so every model is grounded in how cancer progresses in a population rather than only in published literature.
3. **Deep Domain Knowledge** — Oncology-specific clinical and scientific expertise at every step, producing an interpretable output rather than a black-box score.

**CTA:** Explore the science behind it → `/science`

## What's in a name?

An interactive scroll sequence separates “Health” and “Voitho” and reveals a light, canvas-style illustration of one hand helping another. The copy arrives sequentially:

> HealthVoitho blends the word “Health” with the Greek word “voitho,” which means “to assist.”

> We enable scientists, clinicians and institutions to harness the collective wisdom and the power of technology to uncover knowledge for the future of cancer care. We do so to help people everywhere live healthier and happier.

## Latest Work

This section sits immediately above the footer. It uses three compact editorial cards whose neutral image fields transition to the company gradient on hover.

1. **A new way to manage pain for cancer patients** — supportive technology within the cancer-care pathway. The image crop shows only the upper body.
2. **Cancer care for rural India** — intelligent pathways connecting communities, screening, and clinical expertise.
3. **Bringing screening from hospitals to homes** — compact screening experiences designed to move beyond specialist facilities.

# Science `/science`

**H1:** Intelligence built for the cancer ecosystem

“Intelligence” uses the site gradient; the remaining heading uses the standard deep blue.

**Lead:**

> We do not start from a catalogue. We start from four bodies of work that have to function together: how machines read clinical signal, how data becomes the next decision, how devices can leave the hospital, and how cancer is found while there is still time.

The page uses a white background, shared contour animation, and a vertical connecting line that progresses through four fields:

1. **AI in healthcare** — clinically useful, explainable signal for cancer-ecosystem decisions.
2. **Data in healthcare** — longitudinal, privacy-disciplined information connected to a clear clinical decision.
3. **Device R&D** — portable diagnostic pathways that preserve clinical integrity outside tertiary hospitals.
4. **Early detection** — estimating risk while intervention can still change the course of disease.

The page must continue to describe fields of inquiry rather than market individual devices or invite consumer screening.

# Partnerships `/partnerships`

**H1:** Ambitious problems demand collaborators who've earned the room

“Collaborators” uses the site gradient.

**Lead:**

> Our mission is to close the gap between when cancer can be caught and when it’s actually caught. That’s a bigger problem than any one lab, dataset, or model can solve alone — which is why every serious step we’ve taken has been taken alongside the people closest to the science.

## Driving discovery together

The section addresses independent scientists, research labs, academic and clinical institutions, and other aligned partners. It explains the role of AI, longitudinal data, and oncology expertise in producing evidence that holds outside a lab and reaches beyond tertiary centres.

## Our partners

The current implementation contains one editorial partner feature for **Meridian Cancer Research Institute**, with an illustrative logo, image, collaboration description, and attributed quotation.

**Important:** Meridian Cancer Research Institute, Dr. Amara Solanki, the collaboration, and the quotation are placeholders. They must not be published as real claims. Replace the entire entry with an approved institution, approved logo, factual collaboration description, and cleared quotation before launch.

## Our partnership principles

This is an open four-column grid on a dark background, not a set of cards:

- **Rigor** — validate against causal, real-world evidence before handing work downstream.
- **Reciprocity** — combine partner data and expertise with HealthVoitho modelling and validation.
- **Velocity** — judge collaboration against the clock faced by people with cancer.
- **Reach** — move validated pathways beyond tertiary centres.

**Closing CTA:** Partner with us → `/contact`

# People `/people`

**H1:** Leadership guided by purpose

“Leadership guided by” uses the standard deep blue and “purpose” uses the gradient.

> Our leadership team brings together a powerful blend of expertise across technology, cancer research, and healthcare, and a passion for redefining cancer care.

The page uses three compact, Valo-inspired portrait treatments on a white contour background:

- **Raktim Chattopadhyay** — Founder, Director
- **Mohan Krishna Pathalapati** — VP Operations
- **Rupam Chattopadhyay** — Chief Technology Officer

# Contact `/contact`

**H1:** If you are building in this ecosystem, we should know each other.

> Scientists, clinicians, medtech teams, and institutions — this form reaches us by email. We do not offer consumer screening through this site.

The form uses the site typography, blue labels, rounded inputs, and a gradient-outline **Send** button. Fields are Name, Organisation, Role, Email, How we might work, and Message. Collaboration choices are Partner, Acquire & operate, and Other.

# Footer

The footer uses a dark, animated theme gradient with a subtle grain texture and smooth continuous movement.

Left column:

- Enlarged white HealthVoitho logo linked to the landing-page top.
- “HealthVoitho Technologies Pvt. Ltd. is a part of Esperer Group of Companies.”
- White Gateway of India mark.
- Gundecha Enclave, 4BA, 4th Floor, Khairani Rd., Saki Naka, Mumbai, Maharashtra 400072.
- Email: info@healthvoitho.com.
- Phone: 022-27840109.

Right column:

- Monochrome, consistently sized CE, FDA, HIPAA, and ISO 27001 marks.
- Privacy Policy, Terms & Conditions, LinkedIn, and current-year copyright.

Certification marks are visual placeholders until the corresponding certificate or regulatory links and claims are approved. DPDPA is intentionally not displayed.

# Voice and content rules

- Prefer *build, validate, prove, partner, operate,* and *transfer* over generic innovation claims.
- Keep the focus on cancer science and the decisions it enables, not SKUs.
- Do not describe an AI score as a replacement for clinical or domain review.
- Do not invite patients to purchase screening or treatment through this website.
- Do not publish partner names, logos, quotes, statistics, regulatory claims, or certification links without evidence and approval.
- Keep headings concise, consistently sized within their page tier, and free of eyebrow labels unless a future design explicitly requires one.

# Pre-publication checklist

1. Add authoritative citations and legal approval for the 72%, 28%, and 1-in-5 cancer facts.
2. Replace the illustrative Meridian partner feature with a real, approved collaboration or remove the feature.
3. Confirm usage rights and hosting reliability for all externally sourced images and the spheroid-invasion video.
4. Validate the CE, FDA, HIPAA, and ISO 27001 representations and add approved certificate links.
5. Finalise the Privacy Policy and Terms & Conditions destinations and copy.
6. Verify production delivery, validation, spam protection, and privacy handling for the contact form.
7. Complete accessibility, responsive, performance, and reduced-motion review before release.

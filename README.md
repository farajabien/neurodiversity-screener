# Neurodiversity Self-Screener App

A modern, accessible Next.js web application for taking ADHD and Autism self-screening questionnaires. Features a clean, mobile-first interface with one-question-at-a-time navigation, progress tracking, instant scoring, and PDF downloads of official questionnaires.

---

## Features

- **🎨 Big CTA Design**: Large, prominent call-to-action buttons for clear user flow
- **🧠 Neurodivergent-Friendly**: Minimal distractions, clear focus, consistent patterns
- **📱 Mobile-First Design**: Touch-optimized interface with one question at a time
- **🎯 Two Validated Screeners**: 
  - **ADHD**: Adult ADHD Self-Report Scale (ASRS-v1.1) - 18 questions
  - **Autism**: AQ-10 Autism Spectrum Quotient - 10 questions
- **📊 Progress Tracking**: Visual progress bar shows completion status
- **⚡ Instant Results**: Real-time scoring with clinical interpretation and risk stratification
- **💾 Local Storage**: Results saved locally, no backend required
- **📄 PDF Downloads**: Access to official questionnaire PDFs with usage tracking
- **♿ Accessibility-First**: WCAG 2.1 compliance, keyboard navigation, high contrast
- **🎨 Design System**: Comprehensive design guidelines with autism/ADHD-specific considerations

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v8 or later)

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/neurodiversity-screener.git
   cd neurodiversity-screener
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser** at `http://localhost:3000`

---

## Project Structure

```
neurodiversity-screener/
├── app/                          # Next.js 15 App Router
│   ├── adhd/                    # ADHD screener pages
│   │   ├── page.tsx            # ADHD landing page with Big CTA
│   │   ├── questionnaire/       # ADHD questionnaire flow
│   │   └── results/            # ADHD results with real scoring
│   ├── autism/                  # Autism screener pages
│   │   ├── page.tsx            # Autism landing page with Big CTA
│   │   ├── questionnaire/       # Autism questionnaire flow
│   │   └── results/            # Autism results with real scoring
│   ├── globals.css              # Global styles with Tailwind CSS v4
│   ├── layout.tsx               # Root layout with navigation
│   └── page.tsx                 # Homepage with Big CTA design
├── components/                   # React components
│   ├── analytics/               # Usage tracking components
│   ├── questionnaire/           # Questionnaire UI components
│   ├── results/                 # Results display components
│   └── ui/                      # shadcn/ui components
├── hooks/                       # Custom React hooks
│   ├── useAnalytics.ts         # Analytics tracking
│   └── useQuestionnaire.ts     # Questionnaire state management
├── lib/                         # Utilities and business logic
│   ├── analytics/              # Client-side usage tracking
│   ├── data/                   # Question datasets (ASRS-v1.1, AQ-10)
│   ├── scoring/                # Clinical scoring algorithms
│   └── utils.ts                # Tailwind CSS utilities
├── public/
│   └── questionnaires/          # Official PDF questionnaires
│       ├── adhd-questionnaire-ASRS111.pdf
│       └── AQ-10_for_adults.pdf
├── DESIGN_SYSTEM.md             # Comprehensive design guidelines
├── components.json              # shadcn/ui configuration
└── package.json
```

---

## Usage

### Taking a Screener

1. **Choose a screener** from the homepage (ADHD or Autism)
2. **Answer questions** one at a time using the radio buttons
3. **Track progress** with the visual progress bar
4. **View results** with instant scoring and interpretation
5. **Download PDFs** of official questionnaires if needed
6. **Retake anytime** - results are saved locally

### Questionnaire Details

#### ADHD Screener (ASRS-v1.1)
- **Questions**: 18 (based on DSM-IV-TR criteria)
- **Scoring**: Part A (6 questions) most predictive
- **Threshold**: 4+ darkly shaded responses in Part A indicates further evaluation needed
- **Reference**: [Official ADHD Questionnaire PDF](https://add.org/wp-content/uploads/2015/03/adhd-questionnaire-ASRS111.pdf)

#### Autism Screener (AQ-10)
- **Questions**: 10 (autism spectrum quotient)
- **Scoring**: Points awarded for specific agree/disagree patterns
- **Threshold**: 6+ points suggests autism assessment should be considered
- **Reference**: [Official AQ-10 PDF](https://www.clinical-partners.co.uk/images/forms/AQ-10_for_adults.pdf)

---

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Form Handling**: React Hook Form with Zod validation
- **Storage**: localStorage (client-side only)

---

## Development

### Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add [component-name]
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Adding New Screeners

1. **Create question data** in your component or data file
2. **Define scoring logic** with appropriate thresholds
3. **Add to main questionnaire selector**
4. **Include official PDF** in `public/questionnaires/`

---

## Customization

### Styling
- Edit `app/globals.css` for global styles
- Modify shadcn/ui theme in `components.json`
- Customize components in `components/ui/`

### Questions & Scoring
- Clinical question datasets (ASRS-v1.1, AQ-10) with exact validated wording
- Real scoring algorithms matching official thresholds and interpretations
- Risk stratification and detailed clinical recommendations
- Easy to modify or extend existing screeners

### Design Philosophy
- **Clarity Through Simplicity**: Minimal distractions, clear hierarchy, single primary actions
- **Neurodivergent-Friendly**: Considerations for ADHD and autism users throughout
- **Big CTA Approach**: Prominent call-to-action buttons guide users clearly
- **Accessibility-First**: WCAG 2.1 compliance, high contrast, keyboard navigation
- See `DESIGN_SYSTEM.md` for comprehensive guidelines

---

## Clinical References

This application implements validated screening tools:

- **ASRS-v1.1**: Developed with WHO and leading ADHD researchers
- **AQ-10**: Created by Autism Research Centre, University of Cambridge

**Important**: These are screening tools only. A score above threshold suggests further clinical evaluation may be helpful, but cannot provide a diagnosis.

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com/)
3. Automatic deployments on every push

### Other Platforms
- Build with `pnpm build`
- Deploy the `.next` folder
- Serve static files from `public/`

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## Acknowledgments

- Questionnaires based on validated clinical screening tools
- Built with [shadcn/ui](https://ui.shadcn.com/) component library
- Accessibility guidelines from WCAG 2.1
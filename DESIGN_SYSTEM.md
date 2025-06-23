 # 🎨 Neurodiversity Screener Design System

## 🎯 **Design Philosophy**

**"Clarity Through Simplicity"** - Our design reduces cognitive load for users who may be experiencing ADHD or autism-related challenges. Every element serves a purpose, every interaction is intentional.

### Core Principles
1. **🧠 Neurodivergent-Friendly**: Minimal distractions, clear focus, consistent patterns
2. **📱 Mobile-First**: Touch-optimized, thumb-friendly, works on any device
3. **♿ Accessibility-First**: High contrast, keyboard navigation, screen reader support
4. **🎯 Purpose-Driven**: Every component has a clear, single purpose
5. **💙 Empathetic**: Warm, non-judgmental, clinically accurate but human

---

## 🎨 **Visual Design Language**

### Color Palette

#### Primary Colors
- **ADHD Orange**: `#f97316` (vibrant, energetic, attention-grabbing)
- **Autism Blue**: `#3b82f6` (calm, trustworthy, professional)
- **Neutral Base**: `oklch(0.9821 0 0)` (clean, accessible background)

#### Semantic Colors
- **Success Green**: `#10b981` (positive results, completion)
- **Warning Amber**: `#f59e0b` (moderate risk, attention needed)
- **Danger Red**: `#ef4444` (high risk, important notices)
- **Muted Gray**: `oklch(0.5032 0 0)` (secondary text, subtle elements)

#### Usage Guidelines
- **High Contrast**: Minimum 4.5:1 contrast ratio for all text
- **Color Blindness**: Never rely on color alone for meaning
- **Emotional Association**: Orange = energy/focus, Blue = calm/community

### Typography

#### Font Hierarchy
```css
--font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont
```

- **Hero Text**: 3xl-4xl, font-bold, tracking-tight
- **Page Headers**: 2xl-3xl, font-bold 
- **Section Titles**: xl-2xl, font-semibold
- **Body Text**: base-lg, font-normal, leading-relaxed
- **Small Text**: sm-xs, font-medium, text-muted-foreground

#### Readability Rules
- **Line Height**: 1.6-1.8 for body text (dyslexia-friendly)
- **Line Length**: Max 65 characters per line
- **Font Weight**: Bold for emphasis, never thin weights
- **Letter Spacing**: Slightly increased for headers

### Spacing & Layout

#### Grid System
- **Mobile**: Single column, full-width components
- **Tablet**: 2-column for side-by-side content
- **Desktop**: Max 4 columns, centered 1200px container

#### Spacing Scale
```css
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
--space-12: 3rem    /* 48px */
--space-16: 4rem    /* 64px */
```

---

## 🎯 **UX Guidelines**

### Interaction Patterns

#### Button Hierarchy
1. **Primary CTA**: Large, high contrast, single per screen
2. **Secondary Action**: Outlined, medium size
3. **Tertiary Action**: Text link, subtle

#### Touch Targets
- **Minimum Size**: 44px × 44px (iOS/Android standards)
- **Spacing**: 8px minimum between interactive elements
- **Feedback**: Immediate visual/haptic response

### Navigation Flow

#### Progressive Disclosure
1. **Landing**: Simple choice between screeners
2. **Overview**: Brief explanation + start button
3. **Questions**: One at a time, clear progress
4. **Results**: Score first, then details

#### Error Prevention
- **Clear Labels**: No ambiguous language
- **Validation**: Real-time feedback
- **Confirmation**: Important actions require confirmation
- **Recovery**: Easy way to go back or restart

### Content Strategy

#### Voice & Tone
- **Warm but Professional**: "You" language, active voice
- **Non-Judgmental**: Avoid pathologizing language
- **Empowering**: Focus on self-discovery and support
- **Clear**: Short sentences, simple words

#### Clinical Accuracy
- **Evidence-Based**: Reference official scales (ASRS-v1.1, AQ-10)
- **Disclaimers**: Clear limitations of screening tools
- **Professional Guidance**: Always recommend professional consultation

---

## 🧩 **Component Design Standards**

### Cards
```css
/* Standard Card */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
}

/* Focus Card (primary action) */
.card-focus {
  border: 2px solid var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Buttons
```css
/* Primary CTA */
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: var(--space-4) var(--space-8);
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: var(--radius-lg);
  min-height: 48px;
}

/* Big CTA (hero sections) */
.btn-hero {
  padding: var(--space-6) var(--space-12);
  font-size: 1.25rem;
  min-height: 56px;
}
```

### Progress Indicators
- **Visual**: Progress bar with percentage
- **Numerical**: "Question 3 of 18"
- **Contextual**: Part A vs Part B indicators
- **Encouraging**: "Almost done!" messaging

---

## 📱 **Responsive Design Rules**

### Breakpoints
- **Mobile**: 0-640px (primary focus)
- **Tablet**: 641-1024px (comfortable layouts)
- **Desktop**: 1025px+ (optimal experience)

### Mobile Optimizations
- **Thumb Navigation**: CTAs in bottom 1/3 of screen
- **Single Column**: No horizontal scrolling
- **Large Touch Targets**: Minimum 44px buttons
- **Readable Text**: Minimum 16px font size

### Tablet Adaptations
- **Two-Column**: Side-by-side content where appropriate
- **Larger Cards**: More breathing room
- **Enhanced Navigation**: Secondary actions visible

### Desktop Enhancements
- **Centered Layout**: Max 1200px width
- **Rich Content**: More detailed explanations
- **Keyboard Navigation**: Full keyboard support

---

## ♿ **Accessibility Standards**

### WCAG 2.1 AA Compliance

#### Visual
- **Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Color**: Never rely solely on color for meaning
- **Focus**: Visible focus indicators on all interactive elements
- **Text**: Resizable up to 200% without horizontal scrolling

#### Interaction
- **Keyboard**: All functionality available via keyboard
- **Screen Reader**: Proper ARIA labels and roles
- **Motor**: Large touch targets, no time limits
- **Cognitive**: Clear structure, consistent navigation

#### Testing Checklist
- [ ] Screen reader compatibility (VoiceOver, NVDA)
- [ ] Keyboard-only navigation
- [ ] High contrast mode
- [ ] 200% zoom functionality
- [ ] Color blindness simulation

---

## 🎯 **Call-to-Action Guidelines**

### CTA Hierarchy

#### Primary CTA (Only One Per Screen)
- **Size**: Large (min 48px height)
- **Color**: Brand color (orange/blue)
- **Position**: Above the fold, prominent
- **Text**: Action-oriented ("Start ADHD Screening")

#### Secondary Actions
- **Size**: Medium (40px height)
- **Style**: Outlined or subtle background
- **Position**: Supporting the primary CTA
- **Text**: Clear but less prominent

#### Tertiary Actions
- **Style**: Text links or ghost buttons
- **Purpose**: Navigation, additional info
- **Position**: Header, footer, or inline

### CTA Copy Guidelines
- **Action-Oriented**: "Start", "Continue", "Get Results"
- **Specific**: "Take ADHD Test" not "Click Here"
- **Benefit-Focused**: "Get Your Results" not "Submit"
- **Urgent but Calm**: "Begin Assessment" not "START NOW!!!"

---

## 🧠 **Neurodivergent-Specific Considerations**

### ADHD-Friendly Design
- **Minimal Distractions**: Clean layouts, limited animations
- **Clear Focus**: One primary action per screen
- **Progress Tracking**: Always show where they are
- **Break Points**: Logical stopping points, save progress

### Autism-Friendly Design
- **Predictable Patterns**: Consistent navigation and layout
- **Clear Instructions**: Explicit, step-by-step guidance
- **Sensory Considerations**: Subtle animations, calming colors
- **Detail Available**: Progressive disclosure of information

### Executive Function Support
- **Simple Choices**: Limited options per screen
- **Clear Next Steps**: Always obvious what to do next
- **Error Prevention**: Validation and confirmation
- **Recovery Options**: Easy to go back or restart

---

## 📊 **Performance Standards**

### Loading & Interaction
- **First Paint**: < 1.5 seconds
- **Interactive**: < 3 seconds
- **Button Response**: < 100ms visual feedback
- **Page Transitions**: Smooth, < 300ms

### Technical Requirements
- **Mobile Performance**: 60fps on mid-range devices
- **Bundle Size**: < 500KB initial load
- **Accessibility**: 100% WCAG 2.1 AA compliance
- **Browser Support**: Last 2 versions of major browsers

---

## 🔄 **Implementation Priorities**

### Phase 1: Foundation (CURRENT)
- [x] Core color system
- [x] Typography scale
- [x] Component library
- [x] Responsive grid

### Phase 2: Enhancement (NEXT)
- [ ] Big CTA implementation
- [ ] Micro-interactions
- [ ] Advanced accessibility
- [ ] Performance optimization

### Phase 3: Refinement (FUTURE)
- [ ] User testing feedback
- [ ] A/B testing results
- [ ] Clinical validation
- [ ] Continuous improvement

---

*This design system prioritizes the needs of neurodivergent users while maintaining clinical accuracy and professional standards. Every design decision supports our mission of accessible, empathetic self-assessment tools.*
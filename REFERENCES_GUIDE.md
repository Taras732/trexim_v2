# Reference Data System Guide

This guide explains how to use the centralized reference data system for dropdown lists and form options throughout the Trexim application.

## Overview

The reference data system provides a centralized way to manage dropdown options, lookup values, and form choices used across the application. This eliminates hard-coded values in components and makes it easy to add, modify, or remove options.

## Architecture

### 1. TypeScript Configuration (`src/config/references.ts`)

This is the main reference data file containing:
- Type definitions for reference values
- Arrays of reference objects with multilingual labels
- Helper functions for working with references

### 2. Locale Files (`src/locales/*.json`)

Translation files contain localized labels for:
- Blog categories and statuses
- General reference data (transport types, cargo types, document types, etc.)

## Available Reference Data

### Blog References

#### `BLOG_CATEGORIES`
Blog post categories with icons and descriptions:
- **news** - Новини / News
- **insights** - Інсайти / Insights
- **technology** - Технології / Technology
- **industry** - Галузь / Industry
- **guides** - Посібники / Guides
- **updates** - Оновлення / Updates

#### `BLOG_STATUSES`
Post publication statuses with colors:
- **draft** - Чернетка / Draft (gray)
- **published** - Опубліковано / Published (green)
- **scheduled** - Заплановано / Scheduled (orange)
- **archived** - Архів / Archived (gray)

### Logistics References

#### `TRANSPORT_TYPES`
Transportation methods:
- **road** - Автомобільний / Road 🚛
- **rail** - Залізничний / Rail 🚂
- **sea** - Морський / Sea 🚢
- **air** - Авіа / Air ✈️
- **multimodal** - Мультимодальний / Multimodal 🔄

#### `CARGO_TYPES`
Cargo classifications:
- **general** - Генеральний вантаж / General Cargo
- **container** - Контейнерний / Container
- **bulk** - Насипний / Bulk
- **liquid** - Наливний / Liquid
- **dangerous** - Небезпечний / Dangerous
- **perishable** - Швидкопсувний / Perishable
- **oversized** - Негабаритний / Oversized

#### `DOCUMENT_TYPES`
Document types for customs and logistics:
- **invoice** - Інвойс / Invoice
- **packing_list** - Пакувальний лист / Packing List
- **cmr** - CMR / CMR
- **bill_of_lading** - Коносамент / Bill of Lading
- **certificate** - Сертифікат / Certificate
- **customs_declaration** - Митна декларація / Customs Declaration

### Service References

#### `REQUEST_STATUSES`
Service request statuses:
- **new** - Нова / New (blue)
- **processing** - В обробці / Processing (orange)
- **completed** - Виконано / Completed (green)
- **cancelled** - Скасовано / Cancelled (red)

#### `PRIORITY_LEVELS`
Priority levels:
- **low** - Низький / Low (gray)
- **medium** - Середній / Medium (orange)
- **high** - Високий / High (red)
- **urgent** - Терміново / Urgent (dark red)

## Usage Examples

### 1. Import References

```typescript
import {
  BLOG_CATEGORIES,
  BLOG_STATUSES,
  getReferenceLabel,
  getReferenceOptions
} from '@/config/references'
```

### 2. Create Dropdown with Options

```typescript
// Simple dropdown
<select value={category} onChange={(e) => setCategory(e.target.value)}>
  {BLOG_CATEGORIES.map((cat) => (
    <option key={cat.value} value={cat.value}>
      {cat.icon} {cat.label_uk}
    </option>
  ))}
</select>
```

### 3. Display Reference Label

```typescript
// Get localized label for a value
const categoryLabel = getReferenceLabel(BLOG_CATEGORIES, 'news', 'uk')
// Returns: "Новини"

// Display in component
<span>
  {getReferenceLabel(BLOG_CATEGORIES, post.category, 'uk')}
</span>
```

### 4. Get Reference Options for Select

```typescript
// Get formatted options
const options = getReferenceOptions(BLOG_CATEGORIES, 'en')
// Returns: [
//   { value: 'news', label: 'News', icon: '📰' },
//   { value: 'insights', label: 'Insights', icon: '💡' },
//   ...
// ]

// Use in component
<select>
  {options.map(opt => (
    <option key={opt.value} value={opt.value}>
      {opt.icon} {opt.label}
    </option>
  ))}
</select>
```

### 5. Get Reference Object

```typescript
import { getReference } from '@/config/references'

const status = getReference(BLOG_STATUSES, 'published')
// Returns: {
//   value: 'published',
//   label_uk: 'Опубліковано',
//   label_en: 'Published',
//   color: '#22c55e',
//   icon: '✅'
// }

// Use color for badge
<span style={{ backgroundColor: status?.color }}>
  {status?.icon} {status?.label_uk}
</span>
```

## Helper Functions

### `getReferenceLabel(references, value, language)`
Get the localized label for a reference value.

**Parameters:**
- `references` - Reference array (e.g., `BLOG_CATEGORIES`)
- `value` - Value to look up (e.g., `'news'`)
- `language` - Language code: `'uk'` or `'en'` (default: `'uk'`)

**Returns:** Localized label string

### `getReference(references, value)`
Get the full reference object by value.

**Parameters:**
- `references` - Reference array
- `value` - Value to look up

**Returns:** Reference object or `undefined`

### `getReferenceValues(references)`
Get array of all reference values.

**Parameters:**
- `references` - Reference array

**Returns:** Array of value strings

### `getReferenceOptions(references, language)`
Get formatted options for select/dropdown.

**Parameters:**
- `references` - Reference array
- `language` - Language code: `'uk'` or `'en'` (default: `'uk'`)

**Returns:** Array of `{ value, label, icon }` objects

## Adding New References

### 1. Add to `src/config/references.ts`

```typescript
export const MY_NEW_REFERENCE: ReferenceValue[] = [
  {
    value: 'option1',
    label_uk: 'Опція 1',
    label_en: 'Option 1',
    icon: '🎯',
    color: '#3b82f6',
    description_uk: 'Опис опції',
    description_en: 'Option description'
  },
  // ... more options
]
```

### 2. Add to Locale Files (Optional)

In `src/locales/uk.json`:
```json
{
  "references": {
    "myNewReference": {
      "option1": "Опція 1",
      "option2": "Опція 2"
    }
  }
}
```

In `src/locales/en.json`:
```json
{
  "references": {
    "myNewReference": {
      "option1": "Option 1",
      "option2": "Option 2"
    }
  }
}
```

### 3. Use in Components

```typescript
import { MY_NEW_REFERENCE, getReferenceLabel } from '@/config/references'

// In your component
<select>
  {MY_NEW_REFERENCE.map((ref) => (
    <option key={ref.value} value={ref.value}>
      {ref.icon} {ref.label_uk}
    </option>
  ))}
</select>
```

## Best Practices

1. **Always use references instead of hard-coded values** for dropdown options
2. **Use helper functions** to get labels and display values
3. **Keep TypeScript config and locale files in sync** when adding new references
4. **Include icons** for better UX in dropdown options
5. **Add colors** for status-like references that need visual distinction
6. **Use descriptions** for tooltips or help text

## Current Implementation

The reference system is currently used in:
- **Admin Panel** ([src/app/admin/page.tsx](src/app/admin/page.tsx))
  - Blog category dropdown
  - Blog status dropdown
  - Category filter
  - Status filter
  - Table display with localized labels

## Future Enhancements

Potential improvements:
- Admin UI for managing references dynamically
- Database storage for references (instead of hard-coded)
- Reference versioning and history
- Custom references per user/organization
- Reference validation rules
- API endpoints for reference data

## Support

For questions or issues with the reference system:
- Check this documentation
- Review examples in [src/app/admin/page.tsx](src/app/admin/page.tsx)
- Examine [src/config/references.ts](src/config/references.ts)

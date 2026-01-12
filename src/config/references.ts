/**
 * Centralized reference data for dropdown lists and form options
 * This file contains all lookup values used throughout the application
 */

export type ReferenceValue = {
  value: string
  label_uk: string
  label_en: string
  color?: string
  icon?: string
  description_uk?: string
  description_en?: string
}

/**
 * Blog post categories
 */
export const BLOG_CATEGORIES: ReferenceValue[] = [
  {
    value: 'news',
    label_uk: 'Новини',
    label_en: 'News',
    icon: '📰',
    description_uk: 'Актуальні новини та оновлення компанії',
    description_en: 'Latest company news and updates'
  },
  {
    value: 'insights',
    label_uk: 'Інсайти',
    label_en: 'Insights',
    icon: '💡',
    description_uk: 'Аналітика та експертні думки',
    description_en: 'Analytics and expert opinions'
  },
  {
    value: 'technology',
    label_uk: 'Технології',
    label_en: 'Technology',
    icon: '🚀',
    description_uk: 'Інновації та технологічні рішення',
    description_en: 'Innovations and technology solutions'
  },
  {
    value: 'industry',
    label_uk: 'Галузь',
    label_en: 'Industry',
    icon: '🏭',
    description_uk: 'Огляди галузі та тренди',
    description_en: 'Industry reviews and trends'
  },
  {
    value: 'guides',
    label_uk: 'Посібники',
    label_en: 'Guides',
    icon: '📚',
    description_uk: 'Практичні інструкції та поради',
    description_en: 'Practical instructions and tips'
  },
  {
    value: 'updates',
    label_uk: 'Оновлення',
    label_en: 'Updates',
    icon: '🔄',
    description_uk: 'Оновлення продукту та функцій',
    description_en: 'Product and feature updates'
  }
]

/**
 * Blog post statuses
 */
export const BLOG_STATUSES: ReferenceValue[] = [
  {
    value: 'draft',
    label_uk: 'Чернетка',
    label_en: 'Draft',
    color: '#64748b',
    icon: '📝',
    description_uk: 'Стаття в процесі написання',
    description_en: 'Article in progress'
  },
  {
    value: 'published',
    label_uk: 'Опубліковано',
    label_en: 'Published',
    color: '#22c55e',
    icon: '✅',
    description_uk: 'Стаття опублікована та доступна всім',
    description_en: 'Article published and available to everyone'
  },
  {
    value: 'scheduled',
    label_uk: 'Заплановано',
    label_en: 'Scheduled',
    color: '#f59e0b',
    icon: '⏰',
    description_uk: 'Стаття буде опублікована пізніше',
    description_en: 'Article will be published later'
  },
  {
    value: 'archived',
    label_uk: 'Архів',
    label_en: 'Archived',
    color: '#94a3b8',
    icon: '📦',
    description_uk: 'Стаття в архіві',
    description_en: 'Article archived'
  }
]

/**
 * Transport types for logistics
 */
export const TRANSPORT_TYPES: ReferenceValue[] = [
  {
    value: 'road',
    label_uk: 'Автомобільний',
    label_en: 'Road',
    icon: '🚛'
  },
  {
    value: 'rail',
    label_uk: 'Залізничний',
    label_en: 'Rail',
    icon: '🚂'
  },
  {
    value: 'sea',
    label_uk: 'Морський',
    label_en: 'Sea',
    icon: '🚢'
  },
  {
    value: 'air',
    label_uk: 'Авіа',
    label_en: 'Air',
    icon: '✈️'
  },
  {
    value: 'multimodal',
    label_uk: 'Мультимодальний',
    label_en: 'Multimodal',
    icon: '🔄'
  }
]

/**
 * Cargo types
 */
export const CARGO_TYPES: ReferenceValue[] = [
  {
    value: 'general',
    label_uk: 'Генеральний вантаж',
    label_en: 'General Cargo',
    icon: '📦'
  },
  {
    value: 'container',
    label_uk: 'Контейнерний',
    label_en: 'Container',
    icon: '📦'
  },
  {
    value: 'bulk',
    label_uk: 'Насипний',
    label_en: 'Bulk',
    icon: '⚖️'
  },
  {
    value: 'liquid',
    label_uk: 'Наливний',
    label_en: 'Liquid',
    icon: '🛢️'
  },
  {
    value: 'dangerous',
    label_uk: 'Небезпечний',
    label_en: 'Dangerous',
    icon: '⚠️'
  },
  {
    value: 'perishable',
    label_uk: 'Швидкопсувний',
    label_en: 'Perishable',
    icon: '❄️'
  },
  {
    value: 'oversized',
    label_uk: 'Негабаритний',
    label_en: 'Oversized',
    icon: '📏'
  }
]

/**
 * Document types for customs
 */
export const DOCUMENT_TYPES: ReferenceValue[] = [
  {
    value: 'invoice',
    label_uk: 'Інвойс',
    label_en: 'Invoice',
    icon: '📄'
  },
  {
    value: 'packing_list',
    label_uk: 'Пакувальний лист',
    label_en: 'Packing List',
    icon: '📋'
  },
  {
    value: 'cmr',
    label_uk: 'CMR',
    label_en: 'CMR',
    icon: '🚛'
  },
  {
    value: 'bill_of_lading',
    label_uk: 'Коносамент',
    label_en: 'Bill of Lading',
    icon: '🚢'
  },
  {
    value: 'certificate',
    label_uk: 'Сертифікат',
    label_en: 'Certificate',
    icon: '📜'
  },
  {
    value: 'customs_declaration',
    label_uk: 'Митна декларація',
    label_en: 'Customs Declaration',
    icon: '📑'
  }
]

/**
 * Service request statuses
 */
export const REQUEST_STATUSES: ReferenceValue[] = [
  {
    value: 'new',
    label_uk: 'Нова',
    label_en: 'New',
    color: '#3b82f6',
    icon: '🆕'
  },
  {
    value: 'processing',
    label_uk: 'В обробці',
    label_en: 'Processing',
    color: '#f59e0b',
    icon: '⏳'
  },
  {
    value: 'completed',
    label_uk: 'Виконано',
    label_en: 'Completed',
    color: '#22c55e',
    icon: '✅'
  },
  {
    value: 'cancelled',
    label_uk: 'Скасовано',
    label_en: 'Cancelled',
    color: '#ef4444',
    icon: '❌'
  }
]

/**
 * Priority levels
 */
export const PRIORITY_LEVELS: ReferenceValue[] = [
  {
    value: 'low',
    label_uk: 'Низький',
    label_en: 'Low',
    color: '#64748b',
    icon: '⬇️'
  },
  {
    value: 'medium',
    label_uk: 'Середній',
    label_en: 'Medium',
    color: '#f59e0b',
    icon: '➡️'
  },
  {
    value: 'high',
    label_uk: 'Високий',
    label_en: 'High',
    color: '#ef4444',
    icon: '⬆️'
  },
  {
    value: 'urgent',
    label_uk: 'Терміново',
    label_en: 'Urgent',
    color: '#dc2626',
    icon: '🚨'
  }
]

/**
 * Helper functions for working with references
 */

/**
 * Get reference label by value and language
 */
export function getReferenceLabel(
  references: ReferenceValue[],
  value: string,
  language: 'uk' | 'en' = 'uk'
): string {
  const ref = references.find(r => r.value === value)
  return ref ? ref[`label_${language}`] : value
}

/**
 * Get reference by value
 */
export function getReference(
  references: ReferenceValue[],
  value: string
): ReferenceValue | undefined {
  return references.find(r => r.value === value)
}

/**
 * Get all reference values (for select options)
 */
export function getReferenceValues(references: ReferenceValue[]): string[] {
  return references.map(r => r.value)
}

/**
 * Get reference options for select/dropdown (with labels)
 */
export function getReferenceOptions(
  references: ReferenceValue[],
  language: 'uk' | 'en' = 'uk'
): Array<{ value: string; label: string; icon?: string }> {
  return references.map(r => ({
    value: r.value,
    label: r[`label_${language}`],
    icon: r.icon
  }))
}

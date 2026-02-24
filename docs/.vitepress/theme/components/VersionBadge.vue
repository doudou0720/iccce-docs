<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

interface Props {
    version: string
    type?: 'added' | 'changed' | 'deprecated' | 'removed'
    label?: string
    content?: string
}

const props = withDefaults(defineProps<Props>(), {
    version: '',
    type: 'added',
    label: '',
    content: ''
})

const typeLabels = {
    added: (version: string) => `于${version}新增`,
    changed: (version: string) => `于${version}变更`,
    deprecated: (version: string) => `于${version}废弃`,
    removed: (version: string) => `于${version}移除`
}

const vpBadgeTypes = {
    added: 'tip',
    changed: 'warning',
    deprecated: 'warning',
    removed: 'danger'
}

const displayLabel = computed(() => {
    if (props.label) return props.label;
    return typeLabels[props.type](props.version);
})
const displayContent = computed(() => props.content || props.version)
const badgeType = computed(() => vpBadgeTypes[props.type])
const badgeText = computed(() => displayLabel.value)
const downloadUrl = computed(() => withBase(`/download?version=${props.version}`))

const showFull = ref(false)

const handleMouseEnter = () => {
    showFull.value = true
}

const handleMouseLeave = () => {
    showFull.value = false
}
</script>

<template>
    <a v-if="version" :href="downloadUrl" class="version-badge-link">
        <Badge :type="badgeType" class="version-badge-wrapper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <transition name="badge-fade" mode="out-in">
                <span :key="showFull ? 'full' : 'short'">
                    {{ showFull ? badgeText : version }}
                </span>
            </transition>
        </Badge>
    </a>
    <Badge v-else :type="badgeType" class="version-badge-wrapper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <transition name="badge-fade" mode="out-in">
            <span :key="showFull ? 'full' : 'short'">
                {{ showFull ? badgeText : version }}
            </span>
        </transition>
    </Badge>
</template>

<style scoped>
.version-badge-wrapper {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 15px;
}

.version-badge-link {
    display: inline-block;
    text-decoration: none;
    transition: all 0.2s ease;
}

.version-badge-link:hover {
    transform: scale(1.05);
}

.badge-fade-enter-active,
.badge-fade-leave-active {
    transition: opacity 0.15s ease;
}

.badge-fade-enter-from,
.badge-fade-leave-to {
    opacity: 0;
}
</style>

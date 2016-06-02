import { CompileIdentifierMetadata, CompileTokenMetadata } from './compile_metadata';
import { AppView, DebugAppView } from 'angular2/src/core/linker/view';
import { StaticNodeDebugInfo, DebugContext } from 'angular2/src/core/linker/debug_context';
import { flattenNestedViewRenderNodes, interpolate, checkBinding } from 'angular2/src/core/linker/view_utils';
import { uninitialized, devModeEqual, SimpleChange, ValueUnwrapper, ChangeDetectorRef, ChangeDetectorState, ChangeDetectionStrategy } from 'angular2/src/core/change_detection/change_detection';
import { AppViewManager_ } from 'angular2/src/core/linker/view_manager';
import { AppElement } from 'angular2/src/core/linker/element';
import { ElementRef } from 'angular2/src/core/linker/element_ref';
import { ViewContainerRef } from 'angular2/src/core/linker/view_container_ref';
import { Renderer, RenderComponentType } from 'angular2/src/core/render/api';
import { ViewEncapsulation } from 'angular2/src/core/metadata/view';
import { ViewType } from 'angular2/src/core/linker/view_type';
import { QueryList } from 'angular2/src/core/linker';
import { Injector } from 'angular2/src/core/di/injector';
import { TemplateRef, TemplateRef_ } from 'angular2/src/core/linker/template_ref';
import { MODULE_SUFFIX } from './util';
var APP_VIEW_MODULE_URL = 'asset:angular2/lib/src/core/linker/view' + MODULE_SUFFIX;
var VIEW_UTILS_MODULE_URL = 'asset:angular2/lib/src/core/linker/view_utils' + MODULE_SUFFIX;
var CD_MODULE_URL = 'asset:angular2/lib/src/core/change_detection/change_detection' + MODULE_SUFFIX;
// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impAppViewManager_ = AppViewManager_;
var impAppView = AppView;
var impDebugAppView = DebugAppView;
var impDebugContext = DebugContext;
var impAppElement = AppElement;
var impElementRef = ElementRef;
var impViewContainerRef = ViewContainerRef;
var impChangeDetectorRef = ChangeDetectorRef;
var impRenderComponentType = RenderComponentType;
var impQueryList = QueryList;
var impTemplateRef = TemplateRef;
var impTemplateRef_ = TemplateRef_;
var impValueUnwrapper = ValueUnwrapper;
var impInjector = Injector;
var impViewEncapsulation = ViewEncapsulation;
var impViewType = ViewType;
var impChangeDetectionStrategy = ChangeDetectionStrategy;
var impStaticNodeDebugInfo = StaticNodeDebugInfo;
var impRenderer = Renderer;
var impSimpleChange = SimpleChange;
var impUninitialized = uninitialized;
var impChangeDetectorState = ChangeDetectorState;
var impFlattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
var impDevModeEqual = devModeEqual;
var impInterpolate = interpolate;
var impCheckBinding = checkBinding;
export class Identifiers {
}
Identifiers.AppViewManager_ = new CompileIdentifierMetadata({
    name: 'AppViewManager_',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_manager' + MODULE_SUFFIX,
    runtime: impAppViewManager_
});
Identifiers.AppView = new CompileIdentifierMetadata({ name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView });
Identifiers.DebugAppView = new CompileIdentifierMetadata({ name: 'DebugAppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impDebugAppView });
Identifiers.AppElement = new CompileIdentifierMetadata({
    name: 'AppElement',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element' + MODULE_SUFFIX,
    runtime: impAppElement
});
Identifiers.ElementRef = new CompileIdentifierMetadata({
    name: 'ElementRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/element_ref' + MODULE_SUFFIX,
    runtime: impElementRef
});
Identifiers.ViewContainerRef = new CompileIdentifierMetadata({
    name: 'ViewContainerRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/view_container_ref' + MODULE_SUFFIX,
    runtime: impViewContainerRef
});
Identifiers.ChangeDetectorRef = new CompileIdentifierMetadata({
    name: 'ChangeDetectorRef',
    moduleUrl: 'asset:angular2/lib/src/core/change_detection/change_detector_ref' + MODULE_SUFFIX,
    runtime: impChangeDetectorRef
});
Identifiers.RenderComponentType = new CompileIdentifierMetadata({
    name: 'RenderComponentType',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderComponentType
});
Identifiers.QueryList = new CompileIdentifierMetadata({
    name: 'QueryList',
    moduleUrl: 'asset:angular2/lib/src/core/linker/query_list' + MODULE_SUFFIX,
    runtime: impQueryList
});
Identifiers.TemplateRef = new CompileIdentifierMetadata({
    name: 'TemplateRef',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef
});
Identifiers.TemplateRef_ = new CompileIdentifierMetadata({
    name: 'TemplateRef_',
    moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + MODULE_SUFFIX,
    runtime: impTemplateRef_
});
Identifiers.ValueUnwrapper = new CompileIdentifierMetadata({ name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper });
Identifiers.Injector = new CompileIdentifierMetadata({
    name: 'Injector',
    moduleUrl: `asset:angular2/lib/src/core/di/injector${MODULE_SUFFIX}`,
    runtime: impInjector
});
Identifiers.ViewEncapsulation = new CompileIdentifierMetadata({
    name: 'ViewEncapsulation',
    moduleUrl: 'asset:angular2/lib/src/core/metadata/view' + MODULE_SUFFIX,
    runtime: impViewEncapsulation
});
Identifiers.ViewType = new CompileIdentifierMetadata({
    name: 'ViewType',
    moduleUrl: `asset:angular2/lib/src/core/linker/view_type${MODULE_SUFFIX}`,
    runtime: impViewType
});
Identifiers.ChangeDetectionStrategy = new CompileIdentifierMetadata({
    name: 'ChangeDetectionStrategy',
    moduleUrl: CD_MODULE_URL,
    runtime: impChangeDetectionStrategy
});
Identifiers.StaticNodeDebugInfo = new CompileIdentifierMetadata({
    name: 'StaticNodeDebugInfo',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impStaticNodeDebugInfo
});
Identifiers.DebugContext = new CompileIdentifierMetadata({
    name: 'DebugContext',
    moduleUrl: `asset:angular2/lib/src/core/linker/debug_context${MODULE_SUFFIX}`,
    runtime: impDebugContext
});
Identifiers.Renderer = new CompileIdentifierMetadata({
    name: 'Renderer',
    moduleUrl: 'asset:angular2/lib/src/core/render/api' + MODULE_SUFFIX,
    runtime: impRenderer
});
Identifiers.SimpleChange = new CompileIdentifierMetadata({ name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange });
Identifiers.uninitialized = new CompileIdentifierMetadata({ name: 'uninitialized', moduleUrl: CD_MODULE_URL, runtime: impUninitialized });
Identifiers.ChangeDetectorState = new CompileIdentifierMetadata({ name: 'ChangeDetectorState', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorState });
Identifiers.checkBinding = new CompileIdentifierMetadata({ name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding });
Identifiers.flattenNestedViewRenderNodes = new CompileIdentifierMetadata({
    name: 'flattenNestedViewRenderNodes',
    moduleUrl: VIEW_UTILS_MODULE_URL,
    runtime: impFlattenNestedViewRenderNodes
});
Identifiers.devModeEqual = new CompileIdentifierMetadata({ name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual });
Identifiers.interpolate = new CompileIdentifierMetadata({ name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate });
export function identifierToken(identifier) {
    return new CompileTokenMetadata({ identifier: identifier });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXJEQzN1NVJwLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLG9CQUFvQjtPQUMzRSxFQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSwrQkFBK0I7T0FDNUQsRUFBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUMsTUFBTSx3Q0FBd0M7T0FDakYsRUFDTCw0QkFBNEIsRUFDNUIsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLHFDQUFxQztPQUNyQyxFQUNMLGFBQWEsRUFDYixZQUFZLEVBQ1osWUFBWSxFQUNaLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN4QixNQUFNLHFEQUFxRDtPQUNyRCxFQUFDLGVBQWUsRUFBQyxNQUFNLHVDQUF1QztPQUM5RCxFQUFDLFVBQVUsRUFBQyxNQUFNLGtDQUFrQztPQUNwRCxFQUFDLFVBQVUsRUFBQyxNQUFNLHNDQUFzQztPQUN4RCxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkNBQTZDO09BQ3JFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFrQixNQUFNLDhCQUE4QjtPQUNwRixFQUFDLGlCQUFpQixFQUFDLE1BQU0saUNBQWlDO09BQzFELEVBQUMsUUFBUSxFQUFDLE1BQU0sb0NBQW9DO09BQ3BELEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO09BQzNDLEVBQUMsUUFBUSxFQUFDLE1BQU0sK0JBQStCO09BQy9DLEVBQUMsV0FBVyxFQUFFLFlBQVksRUFBQyxNQUFNLHVDQUF1QztPQUN4RSxFQUFDLGFBQWEsRUFBQyxNQUFNLFFBQVE7QUFFcEMsSUFBSSxtQkFBbUIsR0FBRyx5Q0FBeUMsR0FBRyxhQUFhLENBQUM7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RUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBQyxDQUFDLENBQUM7QUFDdkYsd0JBQVksR0FBRyxJQUFJLHlCQUF5QixDQUMvQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDO0FBQ2pGLHdDQUE0QixHQUFHLElBQUkseUJBQXlCLENBQUM7SUFDbEUsSUFBSSxFQUFFLDhCQUE4QjtJQUNwQyxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLE9BQU8sRUFBRSwrQkFBK0I7Q0FDekMsQ0FBQyxDQUFDO0FBQ0ksd0JBQVksR0FBRyxJQUFJLHlCQUF5QixDQUMvQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQztBQUN6RSx1QkFBVyxHQUFHLElBQUkseUJBQXlCLENBQzlDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQ3RGO0FBRUQsZ0NBQWdDLFVBQXFDO0lBQ25FLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXcsIERlYnVnQXBwVmlld30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnO1xuaW1wb3J0IHtTdGF0aWNOb2RlRGVidWdJbmZvLCBEZWJ1Z0NvbnRleHR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JztcbmltcG9ydCB7XG4gIGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMsXG4gIGludGVycG9sYXRlLFxuICBjaGVja0JpbmRpbmdcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnO1xuaW1wb3J0IHtcbiAgdW5pbml0aWFsaXplZCxcbiAgZGV2TW9kZUVxdWFsLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZhbHVlVW53cmFwcGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7QXBwVmlld01hbmFnZXJffSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19tYW5hZ2VyJztcbmltcG9ydCB7QXBwRWxlbWVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnQnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19jb250YWluZXJfcmVmJztcbmltcG9ydCB7UmVuZGVyZXIsIFJlbmRlckNvbXBvbmVudFR5cGUsIFJlbmRlckRlYnVnSW5mb30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7Vmlld1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUnO1xuaW1wb3J0IHtRdWVyeUxpc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlcic7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaS9pbmplY3Rvcic7XG5pbXBvcnQge1RlbXBsYXRlUmVmLCBUZW1wbGF0ZVJlZl99IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHtNT0RVTEVfU1VGRklYfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgQVBQX1ZJRVdfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnICsgTU9EVUxFX1NVRkZJWDtcbnZhciBWSUVXX1VUSUxTX01PRFVMRV9VUkwgPSAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzJyArIE1PRFVMRV9TVUZGSVg7XG52YXIgQ0RfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJyArIE1PRFVMRV9TVUZGSVg7XG5cbi8vIFJlYXNzaWduIHRoZSBpbXBvcnRzIHRvIGRpZmZlcmVudCB2YXJpYWJsZXMgc28gd2UgY2FuXG4vLyBkZWZpbmUgc3RhdGljIHZhcmlhYmxlcyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBpbXBvcnQuXG4vLyAob25seSBuZWVkZWQgZm9yIERhcnQpLlxudmFyIGltcEFwcFZpZXdNYW5hZ2VyXyA9IEFwcFZpZXdNYW5hZ2VyXztcbnZhciBpbXBBcHBWaWV3ID0gQXBwVmlldztcbnZhciBpbXBEZWJ1Z0FwcFZpZXcgPSBEZWJ1Z0FwcFZpZXc7XG52YXIgaW1wRGVidWdDb250ZXh0ID0gRGVidWdDb250ZXh0O1xudmFyIGltcEFwcEVsZW1lbnQgPSBBcHBFbGVtZW50O1xudmFyIGltcEVsZW1lbnRSZWYgPSBFbGVtZW50UmVmO1xudmFyIGltcFZpZXdDb250YWluZXJSZWYgPSBWaWV3Q29udGFpbmVyUmVmO1xudmFyIGltcENoYW5nZURldGVjdG9yUmVmID0gQ2hhbmdlRGV0ZWN0b3JSZWY7XG52YXIgaW1wUmVuZGVyQ29tcG9uZW50VHlwZSA9IFJlbmRlckNvbXBvbmVudFR5cGU7XG52YXIgaW1wUXVlcnlMaXN0ID0gUXVlcnlMaXN0O1xudmFyIGltcFRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG52YXIgaW1wVGVtcGxhdGVSZWZfID0gVGVtcGxhdGVSZWZfO1xudmFyIGltcFZhbHVlVW53cmFwcGVyID0gVmFsdWVVbndyYXBwZXI7XG52YXIgaW1wSW5qZWN0b3IgPSBJbmplY3RvcjtcbnZhciBpbXBWaWV3RW5jYXBzdWxhdGlvbiA9IFZpZXdFbmNhcHN1bGF0aW9uO1xudmFyIGltcFZpZXdUeXBlID0gVmlld1R5cGU7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTtcbnZhciBpbXBTdGF0aWNOb2RlRGVidWdJbmZvID0gU3RhdGljTm9kZURlYnVnSW5mbztcbnZhciBpbXBSZW5kZXJlciA9IFJlbmRlcmVyO1xudmFyIGltcFNpbXBsZUNoYW5nZSA9IFNpbXBsZUNoYW5nZTtcbnZhciBpbXBVbmluaXRpYWxpemVkID0gdW5pbml0aWFsaXplZDtcbnZhciBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlID0gQ2hhbmdlRGV0ZWN0b3JTdGF0ZTtcbnZhciBpbXBGbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzID0gZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcztcbnZhciBpbXBEZXZNb2RlRXF1YWwgPSBkZXZNb2RlRXF1YWw7XG52YXIgaW1wSW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcbnZhciBpbXBDaGVja0JpbmRpbmcgPSBjaGVja0JpbmRpbmc7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVycyB7XG4gIHN0YXRpYyBBcHBWaWV3TWFuYWdlcl8gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0FwcFZpZXdNYW5hZ2VyXycsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X21hbmFnZXInICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBBcHBWaWV3TWFuYWdlcl9cbiAgfSk7XG4gIHN0YXRpYyBBcHBWaWV3ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcEFwcFZpZXd9KTtcbiAgc3RhdGljIERlYnVnQXBwVmlldyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdEZWJ1Z0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERlYnVnQXBwVmlld30pO1xuICBzdGF0aWMgQXBwRWxlbWVudCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnQXBwRWxlbWVudCcsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wQXBwRWxlbWVudFxuICB9KTtcbiAgc3RhdGljIEVsZW1lbnRSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0VsZW1lbnRSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBFbGVtZW50UmVmXG4gIH0pO1xuICBzdGF0aWMgVmlld0NvbnRhaW5lclJlZiA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld0NvbnRhaW5lclJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X2NvbnRhaW5lcl9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3Q29udGFpbmVyUmVmXG4gIH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdG9yUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0b3JfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJDb21wb25lbnRUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdSZW5kZXJDb21wb25lbnRUeXBlJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvcmVuZGVyL2FwaScgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFJlbmRlckNvbXBvbmVudFR5cGVcbiAgfSk7XG4gIHN0YXRpYyBRdWVyeUxpc3QgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1F1ZXJ5TGlzdCcsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9xdWVyeV9saXN0JyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUXVlcnlMaXN0XG4gIH0pO1xuICBzdGF0aWMgVGVtcGxhdGVSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1RlbXBsYXRlUmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFRlbXBsYXRlUmVmXG4gIH0pO1xuICBzdGF0aWMgVGVtcGxhdGVSZWZfID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdUZW1wbGF0ZVJlZl8nLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdGVtcGxhdGVfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVGVtcGxhdGVSZWZfXG4gIH0pO1xuICBzdGF0aWMgVmFsdWVVbndyYXBwZXIgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnVmFsdWVVbndyYXBwZXInLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcFZhbHVlVW53cmFwcGVyfSk7XG4gIHN0YXRpYyBJbmplY3RvciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnSW5qZWN0b3InLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9kaS9pbmplY3RvciR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcEluamVjdG9yXG4gIH0pO1xuICBzdGF0aWMgVmlld0VuY2Fwc3VsYXRpb24gPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdFbmNhcHN1bGF0aW9uJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldycgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0pO1xuICBzdGF0aWMgVmlld1R5cGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdUeXBlJyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdHlwZSR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcFZpZXdUeXBlXG4gIH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdGlvblN0cmF0ZWd5JyxcbiAgICBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsXG4gICAgcnVudGltZTogaW1wQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbiAgfSk7XG4gIHN0YXRpYyBTdGF0aWNOb2RlRGVidWdJbmZvID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdTdGF0aWNOb2RlRGVidWdJbmZvJyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2RlYnVnX2NvbnRleHQke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBTdGF0aWNOb2RlRGVidWdJbmZvXG4gIH0pO1xuICBzdGF0aWMgRGVidWdDb250ZXh0ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdEZWJ1Z0NvbnRleHQnLFxuICAgIG1vZHVsZVVybDogYGFzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZGVidWdfY29udGV4dCR7TU9EVUxFX1NVRkZJWH1gLFxuICAgIHJ1bnRpbWU6IGltcERlYnVnQ29udGV4dFxuICB9KTtcbiAgc3RhdGljIFJlbmRlcmVyID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdSZW5kZXJlcicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL3JlbmRlci9hcGknICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBSZW5kZXJlclxuICB9KTtcbiAgc3RhdGljIFNpbXBsZUNoYW5nZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdTaW1wbGVDaGFuZ2UnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcFNpbXBsZUNoYW5nZX0pO1xuICBzdGF0aWMgdW5pbml0aWFsaXplZCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICd1bmluaXRpYWxpemVkJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBVbmluaXRpYWxpemVkfSk7XG4gIHN0YXRpYyBDaGFuZ2VEZXRlY3RvclN0YXRlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0NoYW5nZURldGVjdG9yU3RhdGUnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdG9yU3RhdGV9KTtcbiAgc3RhdGljIGNoZWNrQmluZGluZyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdjaGVja0JpbmRpbmcnLCBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wQ2hlY2tCaW5kaW5nfSk7XG4gIHN0YXRpYyBmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzJyxcbiAgICBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCxcbiAgICBydW50aW1lOiBpbXBGbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzXG4gIH0pO1xuICBzdGF0aWMgZGV2TW9kZUVxdWFsID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ2Rldk1vZGVFcXVhbCcsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wRGV2TW9kZUVxdWFsfSk7XG4gIHN0YXRpYyBpbnRlcnBvbGF0ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdpbnRlcnBvbGF0ZScsIG1vZHVsZVVybDogVklFV19VVElMU19NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBJbnRlcnBvbGF0ZX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllclRva2VuKGlkZW50aWZpZXI6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBuZXcgQ29tcGlsZVRva2VuTWV0YWRhdGEoe2lkZW50aWZpZXI6IGlkZW50aWZpZXJ9KTtcbn1cbiJdfQ==
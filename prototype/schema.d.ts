export type Provenance = {kind:'illustration'|'photograph';verified:boolean;collectionNumber:string|null;manufacturer:string|null;year:number|null;photographer:string|null;license:string};
export interface HeritageObject {id:string;legacyItemId:string;name:string;category:string;physicalForm:string;assetId:string|null;provenance:Provenance;motifIds:string[]}
export interface Motif {id:string;sourceObjectId:string;name:string;assetId:string|null;format:string;pattern:string;origin:'project-demo'|'personal-image'|'ai';rightsStatus:string}
export interface Vessel {id:string;type:string;name:string;category:string;preview:'procedural-3d'|'static-2d'|'legacy-2d'|'unavailable';modelAssetId:string|null;modelStatus:'not-connected'|'procedural'|'ready';zones:string[]}
export interface EditParams {scale:number;rotation:number;x:number;y:number;color:string}
export interface PatternRecipe {colourRequest?:string;baseAssetId?:string;requestedInks?:string[];paperVersion?:number;formTechnique?:"vermilion"|"cobalt"|"softSpray";technique?:"vermilion"|"cobalt"|"softSpray"|"linePlate"|"regionInk";sketchMode?:"gesture"|"redesign";printInks?:string[];formRuleVersion?:string;planner?:string|null;design?:{regionBindings?:Array<{part:string;hex:string;regions:number[]}>;outlineFit?:{before:number;after:number;adjusted:boolean};colourIssue?:string;lineInk?:string;inkPalette?:{hex:string;part:string;region?:number[]}[];inkCoverage?:number[];locallyPlaced?:string[];structure?:"solid"|"linear";seams?:string[];seamsReviewed?:boolean;refinement?:string;planes?:{mass:[number,number][];reserve:[number,number][]};subject:string;traits:string[];redraw:string;unit:string;arrangement:string;void:string}|null;version:string;method:string;reference:string;direction:string;layout:string;layoutName:string;idea:string;reading:string;materialRule:string;formation:string;colorStudy:string;source:string;accession:string;sourceUrl:string}
export interface SketchIdentity {ornament?:{unit:string;join:string;opening:string};subject:string;handwriting?:string;inkAnchors?:Array<[number,number]>;family:'quadruped'|'bird'|'aquatic'|'plant'|'person'|'other';pose:string;facing:string;cue:string;count:number;gesture?:{axis:string;proportion:string;accent:string};details?:string[]}
export interface SketchForm {assetId:string;sourceAssetId:string;key:string;identity:SketchIdentity;model:string;recipe:PatternRecipe}
export interface PatternConversion {formAssetId?:string;identity?:SketchIdentity;recipe?:PatternRecipe;assetId:string;key:string;engine:string;aiGenerated?:boolean;provider?:string;removedPaper?:boolean;method:"text"|"image"|"sketch"|"motif";sourceAssetId:string|null;sourceMotifId:string;direction:string;label:string;layout?:string;createdAt:string}
export interface Design {spotPaint?:{source:string;count:2|3;colors:string[];strokes:{slot:number;width:number;points:[number,number][]}[]}|null;enamelTechnique?:"vermilion"|"cobalt"|"softSpray";sketchForm?:SketchForm|null;sketchSubject?:string;patternConversion?:PatternConversion|null;id:string;sourceObjectId:string;sourceMotifId:string;userImageAssetId:string|null;prompt:string;sketchAssetId:string|null;aiVariants:Array<{id:string;assetId:string;provider:string;formAssetId?:string}>;selectedVariantId:string|null;editParams:EditParams;patternLayout:'single'|'repeat'|'wrap'|'brick'|'mirror'|'drop'|'quarter'|'honeycomb';repeatDensity:number;repeatGap:number;flipX:boolean;flipY:boolean;vesselId:string;vesselType:string;vesselPlacement:{zone:string;scale:number;x:number;y:number;rotation:number};updatedAt:string;saveStatus:'local';provenance:{origin:string;aiGenerated:boolean}}
export interface Draft extends Design {recordType:'draft';draftId:string;lineageId:string;rewardRootId?:string;title:string;idea:string;past:unknown[];future:unknown[]}
export interface Work extends Design {recordType:'work';workId:string;visibility:'private';savedAt:string;lineageId:string;rewardRootId:string}
export interface Submission {recordType:'submission';submissionId:string;workId:string;snapshot:Work;themeId:string;consentVersion:string;reviewState:string;selectionState:string;productionState:string;createdAt:string}
export interface PointEvent {recordType:'pointEvent';pointEventId:string;eventId:string;source:{kind:string;id:string};type:'complete'|'submit';points:number;scope:'local-demo';ruleVersion:string;createdAt:string;snapshot:Work|null}
// Existing persistent collection names remain drafts / works / submissions / ledger.
// Runtime write status (saving/error) is in the coordinator; failed writes do not replace saved data.
// itemId/pattern/canvas/imageId/scale/x/y/rotation/color remain compatibility fields for the renderer.
export interface InspirationInputs {inputStage:boolean;direction:'classic'|'modern'|'free';inputTab:'motif'|'image'|'text'|'sketch';primaryInput:'motif'|'image'|'sketch';inspirationImageId:string|null;inputImageName:string;sketchStrokes:Array<{tool:'pen'|'eraser';ink?:'handline-v1';penPressure?:boolean;points:Array<[number,number,number?]>}>}
export interface Draft extends InspirationInputs {}
export interface Work extends InspirationInputs {}
// inspirationImageId stores the independent personal-image input; imageId is the current 2D editor layer.
// AI adapter: run({sourceObjectId,sourceMotifId,prompt,direction,image?:Blob,sketch?:Blob},{signal})
// resolves to {variants:Array<{blob:Blob}>}; no provider is configured by default.
export interface PatternParameters {cropWidth:number;cropHeight:number;patternInk:'original'|'blue'|'red'|'graphite'|'duotone'|'bw';editorFormat:'legacy'|'pattern-v1'}
export interface Design extends PatternParameters {versions:Array<{id:string;name:string;createdAt:string;snapshot:Partial<Design>}>}
export interface EditParams {cropWidth:number;cropHeight:number;patternInk:string}
export interface PatternTextureOutput {version:'reborn-pattern-v1';blob:Blob;width:512|1024|2048;height:512|1024|2048;mimeType:'image/png';colorSpace:'srgb';alpha:boolean;origin:'top-left';uv:{u:'right';v:'down'};sourceObjectId:string;sourceMotifId:string;imageAssetId:string|null;layout:'single'|'repeat'|'wrap'|'brick'|'mirror'|'drop'|'quarter'|'honeycomb';crop:{width:number;height:number}}
// PatternTexture.export(draft,{size:1024,transparent:true}) -> Promise<PatternTextureOutput>.
// Export is a flat texture only. Vessel UV placement, orientation/flipY and physical scale belong to the later 3D adapter.

export interface CupCamera {yaw:number;pitch:number;distance:number}
export interface Design {cupCamera:CupCamera;cupMaterial:{color:"white"|"cream"|"blue"|`#${string}`;finish:"gloss"|"matte"};cupPreviewMode:"three"|"static"}
// Cup adapter uses front curved patch UV: u left-to-right, v bottom-to-top, HTMLImage texture flipY=true.
// Camera persists independently of edit undo history. Model is authored procedural geometry, not a collection scan.

// View preference does not duplicate or replace the design.
export interface Draft {editorSurface?:"object"|"flat"}

export interface VesselPlacement {zone:string;x:number;y:number;scale:number;rotation:number}
export interface Design {vesselStates:Record<string,{placement:VesselPlacement;camera:CupCamera;material:{color:string;finish:string}}>;}
export interface Work {previewAssetId?:string;previewKind?:"webgl"|"static";previewCapturedAt?:string;patternVersion?:{id:string;createdAt:string;sourceObjectId:string;sourceMotifId:string;imageAssetId:string|null;parameters:Record<string,unknown>};appliedVessel?:{id:string;type:string;placement:VesselPlacement;material:unknown;model:"authored-procedural-v1"}}

export interface Design {sampleMirror?:boolean;motifInks?:Record<string,string>;sampleX:number;sampleY:number;sampleWidth:number;sampleHeight:number;brightness:number;contrast:number;saturation:number;hue:number;patternOpacity:number;borderWidth:number;borderColor:string;inkDark:string;inkLight:string}

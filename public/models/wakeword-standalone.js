"use strict";(()=>{var b0=Object.defineProperty,$0=Object.defineProperties;var v0=Object.getOwnPropertyDescriptors;var Co=Object.getOwnPropertySymbols;var x0=Object.prototype.hasOwnProperty,S0=Object.prototype.propertyIsEnumerable;var Oi=(e,t,r)=>t in e?b0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))x0.call(t,r)&&Oi(e,r,t[r]);if(Co)for(var r of Co(t))S0.call(t,r)&&Oi(e,r,t[r]);return e},Fe=(e,t)=>$0(e,v0(t));var Bt=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var zo=(e,t,r)=>Oi(e,typeof t!="symbol"?t+"":t,r);var rt={};var Yn=Object.defineProperty,k0=Object.getOwnPropertyDescriptor,T0=Object.getOwnPropertyNames,I0=Object.prototype.hasOwnProperty,E0=(e=>typeof Bt<"u"?Bt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof Bt<"u"?Bt:t)[r]}):e)(function(e){if(typeof Bt<"u")return Bt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),M=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},nr=(e,t)=>{for(var r in t)Yn(e,r,{get:t[r],enumerable:!0})},C0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of T0(t))!I0.call(e,n)&&n!==r&&Yn(e,n,{get:()=>t[n],enumerable:!(i=k0(t,n))||i.enumerable});return e},Sr=e=>C0(Yn({},"__esModule",{value:!0}),e),Yt,pt,Bi,er,Ri,mp,gp,Jn=M(()=>{"use strict";Yt=new Map,pt=[],Bi=new WeakMap,er=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Yt.get(e);if(i===void 0)Yt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=pt.indexOf(e);n!==-1&&pt.splice(n,1);for(let a=0;a<pt.length;a++)if(Yt.get(pt[a]).priority<=r){pt.splice(a,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},Ri=async e=>{let t=Yt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{if(!r){let i=t.backend,n=Bi.get(i);t.initPromise=n?n.then(async()=>i.init(e),async()=>i.init(e)):i.init(e),Bi.set(i,t.initPromise)}return await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},mp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?pt:r,n,a=[],s=new Set;for(let l of i){let p=await Ri(l);typeof p=="string"?a.push({name:l,err:p}):(n||(n=p),n===p&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,p)=>p==="executionProviders"?u:Reflect.get(l,p)})]},gp=async()=>{let e=[];for(let r of pt){if(typeof Yt.get(r).backend.createLoraAdapterHandler!="function")continue;let i=await Ri(r);if(typeof i!="string")return i;e.push({name:r,err:i})}let t=e.length===0?"":` ERR: ${e.map(r=>`[${r.name}] ${r.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${t}`)}}),z0=M(()=>{"use strict";Jn()}),yp,A0=M(()=>{"use strict";yp="1.31.1"}),Ni,Ae,_p=M(()=>{"use strict";A0(),Ni="warning",Ae={wasm:{},webgl:{},webgpu:{},versions:{common:yp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ni=e}},get logLevel(){return Ni}},Object.defineProperty(Ae,"logLevel",{enumerable:!0})}),be,O0=M(()=>{"use strict";_p(),be=Ae}),ei,Di,je,We,Vt,Gt,ea=M(()=>{"use strict";_p(),ei=(e,t)=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeStamp(`${e}::ORT::${t}`)},Di=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),ei("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},je=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||Di("BEGIN",e)},We=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||Di("END",e)},Vt=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.time(`ORT::${e}`)},Gt=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeEnd(`ORT::${e}`)}}),ta,wp=M(()=>{"use strict";Jn(),ea(),ta=class bp{constructor(t,r){this.backend=t,this.handler=r}static async create(t){if(je(),typeof t!="string"&&!(t instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let r=await gp(),i=await r.createLoraAdapterHandler(t);return We(),new bp(r,i)}async release(){return this.handler.dispose()}}}),$p,vp,B0=M(()=>{"use strict";$p=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=a*n,f=0,g=c,_=c*2,y=-1;s==="RGBA"?(f=0,g=c,_=c*2,y=c*3):s==="RGB"?(f=0,g=c,_=c*2):s==="RBG"&&(f=0,_=c,g=c*2);for(let v=0;v<a;v++)for(let S=0;S<n;S++){let w=(e.data[f++]-p[0])*l[0],b=(e.data[g++]-p[1])*l[1],k=(e.data[_++]-p[2])*l[2],I=y===-1?255:(e.data[y++]-p[3])*l[3];i.fillStyle="rgba("+w+","+b+","+k+","+I+")",i.fillRect(S,v,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},vp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,c;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,y=1,v=2,S=3,w=0,b=f,k=f*2,I=-1;u==="RGBA"?(w=0,b=f,k=f*2,I=f*3):u==="RGB"?(w=0,b=f,k=f*2):u==="RBG"&&(w=0,k=f,b=f*2),i=r.createImageData(n,a);for(let E=0;E<a*n;_+=g,y+=g,v+=g,S+=g,E++)i.data[_]=(e.data[w++]-c[0])*p[0],i.data[y]=(e.data[b++]-c[1])*p[1],i.data[v]=(e.data[k++]-c[2])*p[2],i.data[S]=I===-1?255:(e.data[I++]-c[3])*p[3]}else throw new Error("Can not access image data");return i}}),Ur,xp,Sp,kp,Tp,Ip,R0=M(()=>{"use strict";ra(),Ur=(e,t)=>{var I,E,C;if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=(I=t.norm)!=null?I:{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],(E=n.mean[3])!=null?E:255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],(C=n.bias[3])!=null?C:0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,c=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),f=4,g=0,_=1,y=2,v=3,S=0,w=p,b=p*2,k=-1;u==="RGB"&&(f=3,g=0,_=1,y=2,v=-1),l==="RGBA"?k=p*3:l==="RBG"?(S=0,b=p,w=p*2):l==="BGR"&&(b=0,w=p,S=p*2);for(let A=0;A<p;A++,g+=f,y+=f,_+=f,v+=f)c[S++]=(e[g]+s[0])/a[0],c[w++]=(e[_]+s[1])/a[1],c[b++]=(e[y]+s[2])/a[2],k!==-1&&v!==-1&&(c[k++]=(e[v]+s[3])/a[3]);return l==="RGBA"?new qe("float32",c,[1,4,r,i]):new qe("float32",c,[1,3,r,i])},xp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,u=t!=null?t:{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=p(c);if(f!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=_}else u.tensorFormat="RGBA",u.height=g,u.width=_;f.drawImage(e,0,0),s=f.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let g=l();g.width=f,g.height=c;let _=p(g);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=p(c);if(f!=null){let g=e.height,_=e.width;return f.drawImage(e,0,0,_,g),s=f.getImageData(0,0,_,g).data,u.height=g,u.width=_,Ur(s,u)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,f)=>{let g=l(),_=p(g);if(!e||!_)return f();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,_.drawImage(y,0,0,g.width,g.height);let v=_.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(Ur(v.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Ur(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Sp=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new qe({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},kp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new qe({location:"gpu-buffer",type:r!=null?r:"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Tp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new qe({location:"ml-tensor",type:r!=null?r:"float32",mlTensor:e,dims:i,download:n,dispose:a})},Ip=(e,t,r)=>new qe({location:"cpu-pinned",type:e,data:t,dims:r!=null?r:[t.length]})}),Lt,br,Mi,Ep,N0=M(()=>{"use strict";Lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),br=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Mi=!1,Ep=()=>{if(!Mi){Mi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Lt.set("int64",BigInt64Array),br.set(BigInt64Array,"int64")),t&&(Lt.set("uint64",BigUint64Array),br.set(BigUint64Array,"uint64")),i?(Lt.set("float16",r),br.set(r,"float16")):Lt.set("float16",Uint16Array)}}}),Cp,zp,D0=M(()=>{"use strict";ra(),Cp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},zp=(e,t)=>{switch(e.location){case"cpu":return new qe(e.type,e.data,t);case"cpu-pinned":return new qe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new qe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new qe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new qe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),qe,ra=M(()=>{"use strict";B0(),R0(),N0(),D0(),qe=class{constructor(e,t,r){Ep();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Lt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Lt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=br.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=s,this.dataLocation="cpu"}let a=Cp(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return xp(e,t)}static fromTexture(e,t){return Sp(e,t)}static fromGpuBuffer(e,t){return kp(e,t)}static fromMLTensor(e,t){return Tp(e,t)}static fromPinnedBuffer(e,t,r){return Ip(e,t,r)}toDataURL(e){return $p(this,e)}toImageData(e){return vp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return zp(this,e)}}}),Be,Ap=M(()=>{"use strict";ra(),Be=qe}),Op,M0=M(()=>{"use strict";Jn(),wp(),Ap(),ea(),Op=class Bp{constructor(t,r){this.handler=t,this.backend=r}async run(t,r,i){je(),Vt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Be||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Be)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let c of r){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);n[c]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,f=Object.getOwnPropertyNames(r);for(let g of this.outputNames)if(f.indexOf(g)!==-1){let _=r[g];(_===null||_ instanceof Be)&&(c=!0,s=!1,n[g]=_)}if(c){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(s)for(let c of this.outputNames)n[c]=null;let u;if(a.activeLoraAdapters!==void 0){if(!Array.isArray(a.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");u=a.activeLoraAdapters.map(c=>{if(!(c instanceof ta))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(c.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return c.handler})}let l=await this.handler.run(t,n,a,u),p={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let f=l[c];f instanceof Be?p[c]=f:p[c]=new Be(f.type,f.data,f.dims)}return Gt("InferenceSession.run"),We(),p}async release(){return this.handler.dispose()}static async create(t,r,i,n){je(),Vt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-f,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await mp(s),p=await u.createInferenceSessionHandler(a,l);return Gt("InferenceSession.create"),We(),new Bp(p,u)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Kt,U0=M(()=>{"use strict";M0(),Kt=Op}),Rp,P0=M(()=>{"use strict";wp(),Rp=ta}),L0=M(()=>{"use strict"}),q0=M(()=>{"use strict"}),W0=M(()=>{"use strict"}),V0=M(()=>{"use strict"}),G0={};nr(G0,{InferenceSession:()=>Kt,LoraAdapter:()=>Rp,TRACE:()=>ei,TRACE_EVENT_BEGIN:()=>Vt,TRACE_EVENT_END:()=>Gt,TRACE_FUNC_BEGIN:()=>je,TRACE_FUNC_END:()=>We,Tensor:()=>Be,env:()=>be,registerBackend:()=>er});var Ge=M(()=>{"use strict";z0(),O0(),U0(),P0(),Ap(),L0(),q0(),ea(),W0(),V0()}),ia=M(()=>{"use strict"}),Np={};nr(Np,{default:()=>Dp});var Ui,Pi,Dp,H0=M(()=>{"use strict";var e;Ff(),Zt(),na(),Ui="ort-wasm-proxy-worker",Pi=((e=globalThis.self)==null?void 0:e.name)===Ui,Pi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":aa(i.wasm).then(()=>{va(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;xa(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=oi(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;Sa(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":ka(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:u,options:l}=i;Ta(n,a,s,u,new Array(u.length).fill(null),l).then(p=>{p.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},Ea([...s,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":Ia(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Dp=Pi?null:t=>new Worker(t!=null?t:Le,{type:"module",name:Ui})}),Mp={};nr(Mp,{default:()=>Up});async function Ao(e={}){var To,Io,Eo;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((To=self.name)==null?void 0:To.startsWith("em-pthread"));t.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(t.jd||(t.jd=new Map)).set(o,d)},t.unmountExternalData=()=>{delete t.jd,delete t.ke,delete t.je,delete t.le},(Io=globalThis.SharedArrayBuffer)!=null||new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=o=>async(...d)=>{var m;try{if(t.hd)throw Error("Session already started");let h=t.hd={Vd:d[0],errors:[]},$=await o(...d);if(t.hd!==h)throw Error("Session mismatch");(m=t.pd)==null||m.flush();let T=h.errors;if(0<T.length){let z=await Promise.all(T);if(z=z.filter(R=>R),0<z.length)throw Error(z.join(`
`))}return $}finally{t.hd=null}};t.jsepInit=(o,d)=>{if(o==="webgpu"){[t.pd,t.Ld,t.Pd,t.rd,t.Od,t.ic,t.Qd,t.Sd,t.Md,t.Nd,t.Rd]=d;let m=t.pd;t.jsepRegisterBuffer=(h,$,T,z)=>m.registerBuffer(h,$,T,z),t.jsepGetBuffer=h=>m.getBuffer(h),t.jsepCreateDownloader=(h,$,T)=>m.createDownloader(h,$,T),t.jsepOnCreateSession=h=>{m.onCreateSession(h)},t.jsepOnReleaseSession=h=>{m.onReleaseSession(h)},t.jsepOnRunStart=h=>m.onRunStart(h),t.Td=(h,$)=>{m.upload(h,$)}}else if(o==="webnn"){let m=d[0];[t.ce,t.Cd,t.webnnEnsureTensor,t.Dd,t.webnnDownloadTensor,t.be,t.webnnEnableTraceEvent]=d.slice(1),t.webnnReleaseTensorId=t.Cd,t.webnnUploadTensor=t.Dd,t.webnnRegisterMLContext=t.be,t.webnnOnRunStart=h=>m.onRunStart(h),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=h=>{m.onReleaseSession(h)},t.webnnCreateMLTensorDownloader=(h,$)=>m.createMLTensorDownloader(h,$),t.webnnRegisterMLTensor=(h,$,T,z)=>m.registerMLTensor(h,$,T,z),t.webnnCreateMLContext=h=>m.createMLContext(h),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=d=>(...m)=>{let h=at;return m=d(...m),at!=h?new Promise(($,T)=>{wi={resolve:$,reject:T}}):m};(d=>{for(let m of d)t[m]=o(t[m])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var u,l,p=(o,d)=>{throw d},c=rt.url,f="";if(r||i){try{f=new URL(".",c).href}catch(o){}i&&(l=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),u=async o=>{if(A(o))return new Promise((m,h)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?m($.response):h($.status)},$.onerror=h,$.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var g,_,y,v,S,w,b=console.log.bind(console),k=console.error.bind(console),I=b,E=k,C=!1,A=o=>o.startsWith("file://");function x(){gt.buffer!=P.buffer&&j()}if(n){let o=function(d){try{var m=d.data,h=m.bd;if(h==="load"){let $=[];self.onmessage=T=>$.push(T),w=()=>{postMessage({bd:"loaded"});for(let T of $)o(T);self.onmessage=o};for(let T of m.Hd)t[T]&&!t[T].proxy||(t[T]=(...z)=>{postMessage({bd:"callHandler",Fd:T,args:z})},T=="print"&&(I=t[T]),T=="printErr"&&(E=t[T]));gt=m.Zd,j(),_=m.$d,fe(),Mr()}else if(h==="run"){(function($){var T=(x(),W)[$+52>>>2>>>0];$=(x(),W)[$+56>>>2>>>0],Bs(T,T-$),se(T)})(m.ad),Si(m.ad,0,0,1,0,0),Ba(),gi(m.ad),U||(Is(),U=!0);try{um(m.Xd,m.nd)}catch($){if($!="unwind")throw $}}else m.target!=="setimmediate"&&(h==="checkMailbox"?U&&zr():h&&(E(`worker: received unknown command ${h}`),E(m)))}catch($){throw Es(),$}};var D=o,U=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}var P,G,H,te,O,W,J,_e,K,ue,L,q=!1;function j(){var o=gt.buffer;t.HEAP8=P=new Int8Array(o),H=new Int16Array(o),t.HEAPU8=G=new Uint8Array(o),te=new Uint16Array(o),t.HEAP32=O=new Int32Array(o),t.HEAPU32=W=new Uint32Array(o),J=new Float32Array(o),_e=new Float64Array(o),K=new BigInt64Array(o),ue=new BigUint64Array(o)}function Z(){q=!0,n?w():dt.vb()}function re(o){throw E(o="Aborted("+o+")"),C=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function Ee(){return{a:{na:Bg,jb:Og,g:lm,G:dm,f:pm,o:cm,h:hm,$:fm,b:mm,S:gm,Ja:Pa,n:ym,aa:Va,_a:Ga,Fa:Ha,Ha:Fa,$a:ja,Ya:Ka,Ra:Za,Xa:Qa,la:Xa,Ga:Ya,Da:Ja,Za:es,Ea:ts,eb:_m,ga:bm,ya:$m,wa:xm,fa:km,N:Tm,I:Im,xa:Em,_:Nm,za:Dm,Ua:Mm,Ba:Pm,Ka:Lm,ua:qm,ha:Wm,Ta:gi,bb:Vm,Q:jm,r:Ym,c:fi,kb:Jm,y:eg,M:tg,D:rg,m:ig,s:ls,lb:ng,J:ag,R:sg,j:og,u:ug,q:lg,k:dg,Oa:pg,Pa:cg,Qa:hg,Ma:hs,Na:fs,va:ms,gb:mg,db:_g,v:wg,ba:bg,ia:$g,cb:gg,V:vg,ab:xg,Ca:Sg,F:fg,U:kg,ma:Nr,Aa:Ig,ib:Tg,hb:Eg,Va:ws,Wa:bs,Ia:Pe,T:$s,La:vs,ka:xs,Sa:Ss,ja:ks,nb:y0,oa:c0,ob:g0,pa:p0,H:e0,e:Mg,t:Ng,w:Rg,B:Kg,pb:u0,Z:o0,x:qg,qa:l0,X:h0,ca:s0,qb:a0,ea:Pg,O:Zg,sb:r0,ra:n0,tb:t0,L:Yg,Y:d0,d:Dg,A:Lg,l:Ug,mb:_0,p:Vg,z:Gg,C:Wg,E:Hg,K:Qg,sa:Jg,P:f0,da:Xg,W:m0,ub:jg,ta:Fg,rb:i0,i:zg,a:gt,fb:Te}}}async function fe(){function o(h,$){var T=dt=h.exports;h={};for(let[z,R]of Object.entries(T))typeof R=="function"?(T=Gm(R),h[z]=T):h[z]=R;return dt=h,dt=(function(){var z=dt,R=F=>ae=>F(ae)>>>0,V=F=>()=>F()>>>0;return(z=Object.assign({},z)).wb=R(z.wb),z.ec=V(z.ec),z.gc=R(z.gc),z.uc=R(z.uc),z.vc=V(z.vc),z.zc=R(z.zc),z})(),Aa.push(dt.hc),Ts=(h=dt).wb,Is=h.xb,t._OrtInit=h.yb,t._OrtGetLastError=h.zb,t._OrtCreateSessionOptions=h.Ab,t._OrtAppendExecutionProvider=h.Bb,t._OrtGetEpDevices=h.Cb,t._OrtEpDevice_EpName=h.Db,t._OrtAppendExecutionProviderV2=h.Eb,t._OrtAddFreeDimensionOverride=h.Fb,t._OrtAddSessionConfigEntry=h.Gb,t._OrtReleaseSessionOptions=h.Hb,t._OrtCreateSession=h.Ib,t._OrtReleaseSession=h.Jb,t._OrtGetInputOutputCount=h.Kb,t._OrtGetInputOutputMetadata=h.Lb,t._OrtFree=h.Mb,t._OrtCreateTensor=h.Nb,t._OrtGetTensorData=h.Ob,t._OrtReleaseTensor=h.Pb,t._OrtCreateLoraAdapter=h.Qb,t._OrtReleaseLoraAdapter=h.Rb,t._OrtCreateRunOptions=h.Sb,t._OrtAddRunConfigEntry=h.Tb,t._OrtRunOptionsAddActiveLoraAdapter=h.Ub,t._OrtReleaseRunOptions=h.Vb,t._OrtCreateBinding=h.Wb,t._OrtBindInput=h.Xb,t._OrtBindOutput=h.Yb,t._OrtClearBoundOutputs=h.Zb,t._OrtReleaseBinding=h._b,t._OrtRunWithBinding=h.$b,t._OrtRun=h.ac,t._OrtEndProfiling=h.bc,t._JsepOutput=h.cc,t._JsepGetNodeName=h.dc,Dr=h.ec,st=t._free=h.fc,or=t._malloc=h.gc,Si=h.jc,Es=h.kc,Cs=h.lc,zs=h.mc,ki=h.nc,As=h.oc,Os=h.pc,le=h.qc,ur=h.rc,Bs=h.sc,se=h.tc,Ti=h.uc,oe=h.vc,Rs=h.wc,Ii=h.xc,Ns=h.yc,Ds=h.zc,Ms=h.Ac,Ei=h.Bc,Us=h.Cc,Ps=h.Dc,Ls=h.Ec,qs=h.Fc,Ws=h.Gc,Vs=h.Hc,Gs=h.Ic,Hs=h.Jc,Fs=h.Kc,js=h.Lc,Ks=h.Mc,Zs=h.Nc,Qs=h.Oc,Xs=h.Pc,Ys=h.Qc,Js=h.Rc,eo=h.Sc,to=h.Tc,ro=h.Uc,io=h.Vc,no=h.Wc,ao=h.Xc,so=h.Yc,oo=h._c,uo=h.$c,lo=h.kd,po=h.ld,co=h.qd,ho=h.vd,fo=h.wd,mo=h.xd,go=h.yd,yo=h.zd,_o=h.Ad,wo=h.Bd,bo=h.Gd,$o=h.Jd,vo=h.fe,xo=h.ge,So=h.he,ko=h.ie,_=$,dt}var d,m=Ee();return t.instantiateWasm?new Promise(h=>{t.instantiateWasm(m,($,T)=>{h(o($,T))})}):n?o(new WebAssembly.Instance(_,Ee()),_):(L!=null||(L=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",rt.url).href),d=await(async function(h){var $=L;if(!g&&!A($))try{var T=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,h)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,R){try{var V=await(async function(F){if(!g)try{var ae=await u(F);return new Uint8Array(ae)}catch(de){}if(F==L&&g)F=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";F=l(F)}return F})(z);return await WebAssembly.instantiate(V,R)}catch(F){E(`failed to asynchronously prepare wasm: ${F}`),re(F)}})($,h)})(m),o(d.instance,d.module))}class ve{constructor(d){zo(this,"name","ExitStatus");this.message=`Program terminated with exit(${d})`,this.status=d}}var Ne=o=>{o.terminate(),o.onmessage=()=>{}},kt=[],Tt=0,It=null,Ke=o=>{it.length==0&&(Na(),Ra(it[0]));var d=it.pop();if(!d)return 6;Et.push(d),Ct[o.ad]=d,d.ad=o.ad;var m={bd:"run",Xd:o.Wd,nd:o.nd,ad:o.ad};return d.postMessage(m,o.ud),0},Re=0,ye=(o,d,...m)=>{var h,$=16*m.length,T=oe(),z=Ti($),R=z>>>3;for(h of m)typeof h=="bigint"?((x(),K)[R++>>>0]=BigInt(1),(x(),K)[R++>>>0]=h):((x(),K)[R++>>>0]=BigInt(0),(x(),_e)[R++>>>0]=h);return o=Cs(o,0,$,z,d),se(T),o};function Te(o){if(n)return ye(0,1,o);if(y=o,!(0<Re)){for(var d of Et)Ne(d);for(d of it)Ne(d);it=[],Et=[],Ct={},C=!0}p(0,new ve(o))}function xe(o){if(n)return ye(1,0,o);Pe(o)}var Pe=o=>{if(y=o,n)throw xe(o),"unwind";Te(o)},it=[],Et=[],Aa=[],Ct={},Oa=o=>{var d=o.ad;delete Ct[d],it.push(o),Et.splice(Et.indexOf(o),1),o.ad=0,zs(d)};function Ba(){Aa.forEach(o=>o())}var Ra=o=>new Promise(d=>{o.onmessage=$=>{var T=$.data;if($=T.bd,T.md&&T.md!=Dr()){var z=Ct[T.md];z?z.postMessage(T,T.ud):E(`Internal error! Worker sent a message "${$}" to target pthread ${T.md}, but that thread no longer exists!`)}else $==="checkMailbox"?zr():$==="spawnThread"?Ke(T):$==="cleanupThread"?Cr(()=>{Oa(Ct[T.Yd])}):$==="loaded"?(o.loaded=!0,d(o)):T.target==="setimmediate"?o.postMessage(T):$==="uncaughtException"?o.onerror(T.error):$==="callHandler"?t[T.Fd](...T.args):$&&E(`worker sent an unknown command ${$}`)},o.onerror=$=>{throw E(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,h=[];for(m of[])t.propertyIsEnumerable(m)&&h.push(m);o.postMessage({bd:"load",Hd:h,Zd:gt,$d:_})});function Na(){var o=new Worker((()=>{let d=URL;return rt.url>"file:"&&rt.url<"file;"?new d("ort.bundle.min.mjs",rt.url):new URL(rt.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});it.push(o)}var gt,um=(o,d)=>{Re=0,o=Ei(o,d),0<Re?y=o:ki(o)},Tr=[],Ir=0;function lm(o){var d=new di(o>>>=0);return(x(),P)[d.cd+12>>>0]==0&&(Da(d,!0),Ir--),Ma(d,!1),Tr.push(d),Ds(o)}var zt=0,dm=()=>{le(0,0);var o=Tr.pop();Rs(o.od),zt=0};function Da(o,d){d=d?1:0,(x(),P)[o.cd+12>>>0]=d}function Ma(o,d){d=d?1:0,(x(),P)[o.cd+13>>>0]=d}class di{constructor(d){this.od=d,this.cd=d-24}}var pi=o=>{var d=zt;if(!d)return ur(0),0;var m=new di(d);(x(),W)[m.cd+16>>>2>>>0]=d;var h=(x(),W)[m.cd+4>>>2>>>0];if(!h)return ur(0),d;for(var $ of o){if($===0||$===h)break;if(Ns($,h,m.cd+16))return ur($),d}return ur(h),d};function pm(){return pi([])}function cm(o){return pi([o>>>0])}function hm(o,d,m,h){return pi([o>>>0,d>>>0,m>>>0,h>>>0])}var fm=()=>{var o=Tr.pop();o||re("no exception to throw");var d=o.od;throw(x(),P)[o.cd+13>>>0]==0&&(Tr.push(o),Ma(o,!0),Da(o,!1),Ir++),Ii(d),zt=d};function mm(o,d,m){var h=new di(o>>>=0);throw d>>>=0,m>>>=0,(x(),W)[h.cd+16>>>2>>>0]=0,(x(),W)[h.cd+4>>>2>>>0]=d,(x(),W)[h.cd+8>>>2>>>0]=m,Ii(o),Ir++,zt=o}var gm=()=>Ir;function Ua(o,d,m,h){return n?ye(2,1,o,d,m,h):Pa(o,d,m,h)}function Pa(o,d,m,h){if(o>>>=0,d>>>=0,m>>>=0,h>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return n&&$.length===0?Ua(o,d,m,h):(o={Wd:m,ad:o,nd:h,ud:$},n?(o.bd="spawnThread",postMessage(o,$),0):Ke(o))}function ym(o){throw zt||(zt=o>>>0),zt}var La=globalThis.TextDecoder&&new TextDecoder,qa=(o,d,m,h)=>{if(m=d+m,h)return m;for(;o[d]&&!(d>=m);)++d;return d},Wa=(o,d=0,m,h)=>{if(16<(m=qa(o,d>>>=0,m,h))-d&&o.buffer&&La)return La.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,m):o.slice(d,m));for(h="";d<m;){var $=o[d++];if(128&$){var T=63&o[d++];if((224&$)==192)h+=String.fromCharCode((31&$)<<6|T);else{var z=63&o[d++];65536>($=(240&$)==224?(15&$)<<12|T<<6|z:(7&$)<<18|T<<12|z<<6|63&o[d++])?h+=String.fromCharCode($):($-=65536,h+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else h+=String.fromCharCode($)}return h},Ie=(o,d,m)=>(o>>>=0)?Wa((x(),G),o,d,m):"";function Va(o,d,m){return n?ye(3,1,o,d,m):0}function Ga(o,d){if(n)return ye(4,1,o,d)}function Ha(o,d){if(n)return ye(5,1,o,d)}function Fa(o,d,m){if(n)return ye(6,1,o,d,m)}function ja(o,d,m){return n?ye(7,1,o,d,m):0}function Ka(o,d){if(n)return ye(8,1,o,d)}function Za(o,d,m){if(n)return ye(9,1,o,d,m)}function Qa(o,d,m,h){if(n)return ye(10,1,o,d,m,h)}function Xa(o,d,m,h){if(n)return ye(11,1,o,d,m,h)}function Ya(o,d,m,h){if(n)return ye(12,1,o,d,m,h)}function Ja(o){if(n)return ye(13,1,o)}function es(o,d){if(n)return ye(14,1,o,d)}function ts(o,d,m){if(n)return ye(15,1,o,d,m)}var _m=()=>re(""),nt=o=>{o>>>=0;for(var d="";;){var m=(x(),G)[o++>>>0];if(!m)return d;d+=String.fromCharCode(m)}},ci={},hi={},wm={},Xt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function lt(o,d,m={}){return(function(h,$,T={}){var z=$.name;if(!h)throw new Xt(`type "${z}" must have a positive integer typeid pointer`);if(hi.hasOwnProperty(h)){if(T.Id)return;throw new Xt(`Cannot register type '${z}' twice`)}hi[h]=$,delete wm[h],ci.hasOwnProperty(h)&&($=ci[h],delete ci[h],$.forEach(R=>R()))})(o,d,m)}var rs=(o,d,m)=>{switch(d){case 1:return m?h=>(x(),P)[h>>>0]:h=>(x(),G)[h>>>0];case 2:return m?h=>(x(),H)[h>>>1>>>0]:h=>(x(),te)[h>>>1>>>0];case 4:return m?h=>(x(),O)[h>>>2>>>0]:h=>(x(),W)[h>>>2>>>0];case 8:return m?h=>(x(),K)[h>>>3>>>0]:h=>(x(),ue)[h>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function bm(o,d,m,h,$){o>>>=0,m>>>=0,d=nt(d>>>0);let T=z=>z;if(h=h===BigInt(0)){let z=8*m;T=R=>BigInt.asUintN(z,R),$=T($)}lt(o,{name:d,Zc:T,ed:(z,R)=>(typeof R=="number"&&(R=BigInt(R)),R),dd:rs(d,m,!h),gd:null})}function $m(o,d,m,h){lt(o>>>=0,{name:d=nt(d>>>0),Zc:function($){return!!$},ed:function($,T){return T?m:h},dd:function($){return this.Zc((x(),G)[$>>>0])},gd:null})}var is=[],At=[0,1,,1,null,1,!0,1,!1,1];function fi(o){9<(o>>>=0)&&--At[o+1]===0&&(At[o]=void 0,is.push(o))}var He=o=>{if(!o)throw new Xt(`Cannot use deleted val. handle = ${o}`);return At[o]},Ze=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=is.pop()||At.length;return At[d]=o,At[d+1]=1,d}};function mi(o){return this.Zc((x(),W)[o>>>2>>>0])}var vm={name:"emscripten::val",Zc:o=>{var d=He(o);return fi(o),d},ed:(o,d)=>Ze(d),dd:mi,gd:null};function xm(o){return lt(o>>>0,vm)}var Sm=(o,d)=>{switch(d){case 4:return function(m){return this.Zc((x(),J)[m>>>2>>>0])};case 8:return function(m){return this.Zc((x(),_e)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function km(o,d,m){m>>>=0,lt(o>>>=0,{name:d=nt(d>>>0),Zc:h=>h,ed:(h,$)=>$,dd:Sm(d,m),gd:null})}function Tm(o,d,m,h,$){o>>>=0,m>>>=0,d=nt(d>>>0);let T=R=>R;if(h===0){var z=32-8*m;T=R=>R<<z>>>z,$=T($)}lt(o,{name:d,Zc:T,ed:(R,V)=>V,dd:rs(d,m,h!==0),gd:null})}function Im(o,d,m){function h(T){var z=(x(),W)[T>>>2>>>0];return T=(x(),W)[T+4>>>2>>>0],new $((x(),P).buffer,T,z)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];lt(o>>>=0,{name:m=nt(m>>>0),Zc:h,dd:h},{Id:!0})}var yt=(o,d,m)=>{var h=(x(),G);if(d>>>=0,0<m){var $=d;m=d+m-1;for(var T=0;T<o.length;++T){var z=o.codePointAt(T);if(127>=z){if(d>=m)break;h[d++>>>0]=z}else if(2047>=z){if(d+1>=m)break;h[d++>>>0]=192|z>>6,h[d++>>>0]=128|63&z}else if(65535>=z){if(d+2>=m)break;h[d++>>>0]=224|z>>12,h[d++>>>0]=128|z>>6&63,h[d++>>>0]=128|63&z}else{if(d+3>=m)break;h[d++>>>0]=240|z>>18,h[d++>>>0]=128|z>>12&63,h[d++>>>0]=128|z>>6&63,h[d++>>>0]=128|63&z,T++}}h[d>>>0]=0,o=d-$}else o=0;return o},Er=o=>{for(var d=0,m=0;m<o.length;++m){var h=o.charCodeAt(m);127>=h?d++:2047>=h?d+=2:55296<=h&&57343>=h?(d+=4,++m):d+=3}return d};function Em(o,d){lt(o>>>=0,{name:d=nt(d>>>0),Zc(m){var h=(x(),W)[m>>>2>>>0];return h=Ie(m+4,h,!0),st(m),h},ed(m,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var $=typeof h=="string";if(!($||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1))throw new Xt("Cannot pass non-string to std::string");var T=$?Er(h):h.length,z=or(4+T+1),R=z+4;return(x(),W)[z>>>2>>>0]=T,$?yt(h,R,T+1):(x(),G).set(h,R>>>0),m!==null&&m.push(st,z),z},dd:mi,gd(m){st(m)}})}var ns=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Cm=(o,d,m)=>{if(o>>>=1,16<(d=qa((x(),te),o,d/2,m))-o&&ns)return ns.decode((x(),te).slice(o,d));for(m="";o<d;++o){var h=(x(),te)[o>>>0];m+=String.fromCharCode(h)}return m},zm=(o,d,m)=>{if(m!=null||(m=2147483647),2>m)return 0;var h=d;m=(m-=2)<2*o.length?m/2:o.length;for(var $=0;$<m;++$){var T=o.charCodeAt($);(x(),H)[d>>>1>>>0]=T,d+=2}return(x(),H)[d>>>1>>>0]=0,d-h},Am=o=>2*o.length,Om=(o,d,m)=>{var h="";o>>>=2;for(var $=0;!($>=d/4);$++){var T=(x(),W)[o+$>>>0];if(!T&&!m)break;h+=String.fromCodePoint(T)}return h},Bm=(o,d,m)=>{if(d>>>=0,m!=null||(m=2147483647),4>m)return 0;var h=d;m=h+m-4;for(var $=0;$<o.length;++$){var T=o.codePointAt($);if(65535<T&&$++,(x(),O)[d>>>2>>>0]=T,(d+=4)+4>m)break}return(x(),O)[d>>>2>>>0]=0,d-h},Rm=o=>{for(var d=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,d+=4;return d};function Nm(o,d,m){if(o>>>=0,d>>>=0,m=nt(m>>>=0),d===2)var h=Cm,$=zm,T=Am;else h=Om,$=Bm,T=Rm;lt(o,{name:m,Zc:z=>{var R=(x(),W)[z>>>2>>>0];return R=h(z+4,R*d,!0),st(z),R},ed:(z,R)=>{if(typeof R!="string")throw new Xt(`Cannot pass non-string to C++ string type ${m}`);var V=T(R),F=or(4+V+d);return(x(),W)[F>>>2>>>0]=V/d,$(R,F+4,V+d),z!==null&&z.push(st,F),F},dd:mi,gd(z){st(z)}})}function Dm(o,d){lt(o>>>=0,{Kd:!0,name:d=nt(d>>>0),Zc:()=>{},ed:()=>{}})}function Mm(o){Si(o>>>0,!i,1,!r,131072,!1),Ba()}var Cr=o=>{if(!C)try{if(o(),!(0<Re))try{n?Dr()&&ki(y):Pe(y)}catch(d){d instanceof ve||d=="unwind"||p(0,d)}}catch(d){d instanceof ve||d=="unwind"||p(0,d)}},Um=!Atomics.waitAsync||((Eo=globalThis.navigator)==null?void 0:Eo.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function gi(o){o>>>=0,Um||(Atomics.waitAsync((x(),O),o>>>2,o).value.then(zr),o+=128,Atomics.store((x(),O),o>>>2,1))}var zr=()=>Cr(()=>{var o=Dr();o&&(gi(o),Os())});function Pm(o,d){(o>>>=0)==d>>>0?setTimeout(zr):n?postMessage({md:o,bd:"checkMailbox"}):(o=Ct[o])&&o.postMessage({bd:"checkMailbox"})}var yi=[];function Lm(o,d,m,h,$){for(d>>>=0,$>>>=0,yi.length=0,m=$>>>3,h=$+h>>>3;m<h;){var T;T=(x(),K)[m++>>>0]?(x(),K)[m++>>>0]:(x(),_e)[m++>>>0],yi.push(T)}return(d?Ci[d]:Ag[o])(...yi)}var qm=()=>{Re=0};function Wm(o){o>>>=0,n?postMessage({bd:"cleanupThread",Yd:o}):Oa(Ct[o])}function Vm(o){}var Ar=o=>{try{o()}catch(d){re(d)}};function Gm(o){var d=(...m)=>{Or.push(o);try{return o(...m)}finally{C||(Or.pop(),at&&_t===1&&Or.length===0&&(_t=0,Re+=1,Ar(xo),typeof Fibers<"u"&&Fibers.ne()))}};return os.set(o,d),d}var _t=0,at=null,as=0,Or=[],_i=new Map,ss=new Map,os=new Map,Hm=0,wi=null,Fm=[],us=o=>(function(d){if(!C){if(_t===0){var m=!1,h=!1;d(($=0)=>{if(!C&&(as=$,m=!0,h)){_t=2,Ar(()=>So(at)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),$=!1;try{var T=(function(){var V=(x(),O)[at+8>>>2>>>0];return V=ss.get(V),V=os.get(V),--Re,V()})()}catch(V){T=V,$=!0}var z=!1;if(!at){var R=wi;R&&(wi=null,($?R.reject:R.resolve)(T),z=!0)}if($&&!z)throw T}}),h=!0,m||(_t=1,at=(function(){var $=or(65548),T=$+12;if((x(),W)[$>>>2>>>0]=T,(x(),W)[$+4>>>2>>>0]=T+65536,T=Or[0],!_i.has(T)){var z=Hm++;_i.set(T,z),ss.set(z,T)}return T=_i.get(T),(x(),O)[$+8>>>2>>>0]=T,$})(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),Ar(()=>vo(at)))}else _t===2?(_t=0,Ar(ko),st(at),at=null,Fm.forEach(Cr)):re(`invalid state: ${_t}`);return as}})(d=>{o().then(d)});function jm(o){return o>>>=0,us(async()=>{var d=await He(o);return Ze(d)})}var bi=[],Km=o=>{var d=bi.length;return bi.push(o),d},Zm=(o,d)=>{for(var m=Array(o),h=0;h<o;++h){var $=h,T=(x(),W)[d+4*h>>>2>>>0],z=hi[T];if(z===void 0)throw o=`parameter ${h}`,T=Ts(T),d=nt(T),st(T),new Xt(`${o} has unknown type ${d}`);m[$]=z}return m},Qm=(o,d,m)=>{var h=[];return o=o(h,m),h.length&&((x(),W)[d>>>2>>>0]=Ze(h)),o},Xm={},Br=o=>{var d=Xm[o];return d===void 0?nt(o):d};function Ym(o,d,m){var[h,...$]=Zm(o,d>>>0);d=h.ed.bind(h);var T=$.map(V=>V.dd.bind(V));o--;var z={toValue:He};switch(o=T.map((V,F)=>{var ae=`argFromPtr${F}`;return z[ae]=V,`${ae}(args${F?"+"+8*F:""})`}),m){case 0:var R="toValue(handle)";break;case 2:R="new (toValue(handle))";break;case 3:R="";break;case 1:z.getStringOrSymbol=Br,R="toValue(handle)[getStringOrSymbol(methodName)]"}return R+=`(${o})`,h.Kd||(z.toReturnWire=d,z.emval_returnValue=Qm,R=`return emval_returnValue(toReturnWire, destructorsRef, ${R})`),R=`return function (handle, methodName, destructorsRef, args) {
  ${R}
  }`,m=new Function(Object.keys(z),R)(...Object.values(z)),R=`methodCaller<(${$.map(V=>V.name)}) => ${h.name}>`,Km(Object.defineProperty(m,"name",{value:R}))}function Jm(o,d){return d>>>=0,(o=He(o>>>0))==He(d)}function eg(o){return(o>>>=0)?(o=Br(o),Ze(globalThis[o])):Ze(globalThis)}function tg(o){return o=Br(o>>>0),Ze(t[o])}function rg(o,d){return d>>>=0,o=He(o>>>0),d=He(d),Ze(o[d])}function ig(o){9<(o>>>=0)&&(At[o+1]+=1)}function ls(o,d,m,h,$){return bi[o>>>0](d>>>0,m>>>0,h>>>0,$>>>0)}function ng(o,d,m,h,$){return ls(o>>>0,d>>>0,m>>>0,h>>>0,$>>>0)}function ag(){return Ze([])}function sg(o){o=He(o>>>0);for(var d=Array(o.length),m=0;m<o.length;m++)d[m]=o[m];return Ze(d)}function og(o){return Ze(Br(o>>>0))}function ug(){return Ze({})}function lg(o){for(var d=He(o>>>=0);d.length;){var m=d.pop();d.pop()(m)}fi(o)}function dg(o,d,m){d>>>=0,m>>>=0,o=He(o>>>0),d=He(d),m=He(m),o[d]=m}function pg(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(x(),O)[d>>>2>>>0]=o.getUTCSeconds(),(x(),O)[d+4>>>2>>>0]=o.getUTCMinutes(),(x(),O)[d+8>>>2>>>0]=o.getUTCHours(),(x(),O)[d+12>>>2>>>0]=o.getUTCDate(),(x(),O)[d+16>>>2>>>0]=o.getUTCMonth(),(x(),O)[d+20>>>2>>>0]=o.getUTCFullYear()-1900,(x(),O)[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),O)[d+28>>>2>>>0]=o}var ds=o=>o%4==0&&(o%100!=0||o%400==0),ps=[0,31,60,91,121,152,182,213,244,274,305,335],cs=[0,31,59,90,120,151,181,212,243,273,304,334];function cg(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(x(),O)[d>>>2>>>0]=o.getSeconds(),(x(),O)[d+4>>>2>>>0]=o.getMinutes(),(x(),O)[d+8>>>2>>>0]=o.getHours(),(x(),O)[d+12>>>2>>>0]=o.getDate(),(x(),O)[d+16>>>2>>>0]=o.getMonth(),(x(),O)[d+20>>>2>>>0]=o.getFullYear()-1900,(x(),O)[d+24>>>2>>>0]=o.getDay();var m=(ds(o.getFullYear())?ps:cs)[o.getMonth()]+o.getDate()-1|0;(x(),O)[d+28>>>2>>>0]=m,(x(),O)[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var h=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=h&&o.getTimezoneOffset()==Math.min(h,m)),(x(),O)[d+32>>>2>>>0]=o}function hg(o){o>>>=0;var d=new Date((x(),O)[o+20>>>2>>>0]+1900,(x(),O)[o+16>>>2>>>0],(x(),O)[o+12>>>2>>>0],(x(),O)[o+8>>>2>>>0],(x(),O)[o+4>>>2>>>0],(x(),O)[o>>>2>>>0],0),m=(x(),O)[o+32>>>2>>>0],h=d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset(),T=new Date(d.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(T,$);return 0>m?(x(),O)[o+32>>>2>>>0]=+($!=T&&z==h):0<m!=(z==h)&&($=Math.max(T,$),d.setTime(d.getTime()+6e4*((0<m?z:$)-h))),(x(),O)[o+24>>>2>>>0]=d.getDay(),m=(ds(d.getFullYear())?ps:cs)[d.getMonth()]+d.getDate()-1|0,(x(),O)[o+28>>>2>>>0]=m,(x(),O)[o>>>2>>>0]=d.getSeconds(),(x(),O)[o+4>>>2>>>0]=d.getMinutes(),(x(),O)[o+8>>>2>>>0]=d.getHours(),(x(),O)[o+12>>>2>>>0]=d.getDate(),(x(),O)[o+16>>>2>>>0]=d.getMonth(),(x(),O)[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function hs(o,d,m,h,$,T,z){return n?ye(16,1,o,d,m,h,$,T,z):-52}function fs(o,d,m,h,$,T){if(n)return ye(17,1,o,d,m,h,$,T)}var sr={},fg=()=>performance.timeOrigin+performance.now();function ms(o,d){if(n)return ye(18,1,o,d);if(sr[o]&&(clearTimeout(sr[o].id),delete sr[o]),!d)return 0;var m=setTimeout(()=>{delete sr[o],Cr(()=>As(o,performance.timeOrigin+performance.now()))},d);return sr[o]={id:m,me:d},0}function mg(o,d,m,h){o>>>=0,d>>>=0,m>>>=0,h>>>=0;var $=new Date().getFullYear(),T=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var z=Math.max(T,$);(x(),W)[o>>>2>>>0]=60*z,(x(),O)[d>>>2>>>0]=+(T!=$),o=(d=R=>{var V=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(V/60)).padStart(2,"0")}${String(V%60).padStart(2,"0")}`})(T),d=d($),$<T?(yt(o,m,17),yt(d,h,17)):(yt(o,h,17),yt(d,m,17))}var gg=()=>Date.now(),yg=1;function _g(o,d,m){if(m>>>=0,!(0<=o&&3>=o))return 28;if(o===0)o=Date.now();else{if(!yg)return 52;o=performance.timeOrigin+performance.now()}return o=Math.round(1e6*o),(x(),K)[m>>>3>>>0]=BigInt(o),0}var $i=[],gs=(o,d)=>{$i.length=0;for(var m;m=(x(),G)[o++>>>0];){var h=m!=105;d+=(h&=m!=112)&&d%8?4:0,$i.push(m==112?(x(),W)[d>>>2>>>0]:m==106?(x(),K)[d>>>3>>>0]:m==105?(x(),O)[d>>>2>>>0]:(x(),_e)[d>>>3>>>0]),d+=h?8:4}return $i};function wg(o,d,m){return o>>>=0,d=gs(d>>>0,m>>>0),Ci[o](...d)}function bg(o,d,m){return o>>>=0,d=gs(d>>>0,m>>>0),Ci[o](...d)}var $g=()=>{};function vg(o,d){return E(Ie(o>>>0,d>>>0))}var xg=()=>{throw Re+=1,"unwind"};function Sg(){return 4294901760}var kg=()=>navigator.hardwareConcurrency,Ot={},Rr=o=>{var d;return(d=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+d[1]:(d=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+d[1]:0},ys=o=>{for(var d of o)(o=Rr(d))&&(Ot[o]=d)};function Tg(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),ys(o),Ot.sd=Rr(o[3]),Ot.Ud=o,Ot.sd}function Nr(o){var h;if(!(o=Ot[o>>>0]))return 0;var d;if(d=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=d[1];else if(d=/^\s+at (.*) \(.*\)$/.exec(o))o=d[1];else{if(!(d=/^(.+?)@/.exec(o)))return 0;o=d[1]}st((h=Nr.td)!=null?h:0),d=Er(o)+1;var m=or(d);return m&&yt(o,m,d),Nr.td=m,Nr.td}function Ig(o){o>>>=0;var d=(x(),G).length;if(o<=d||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var h=d*(1+.2/m);h=Math.min(h,o+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(o,h)/65536))-gt.buffer.byteLength+65535)/65536|0;try{gt.grow(h),j();var $=1;break e}catch(T){}$=void 0}if($)return!0}return!1}function Eg(o,d,m){if(o>>>=0,d>>>=0,Ot.sd==o)var h=Ot.Ud;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),ys(h);for(var $=3;h[$]&&Rr(h[$])!=o;)++$;for(o=0;o<m&&h[o+$];++o)(x(),O)[d+4*o>>>2>>>0]=Rr(h[o+$]);return o}var vi,xi={},_s=()=>{var h,$;if(!vi){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(($=(h=globalThis.navigator)==null?void 0:h.language)!=null?$:"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in xi)xi[o]===void 0?delete d[o]:d[o]=xi[o];var m=[];for(o in d)m.push(`${o}=${d[o]}`);vi=m}return vi};function ws(o,d){if(n)return ye(19,1,o,d);o>>>=0,d>>>=0;var m,h=0,$=0;for(m of _s()){var T=d+h;(x(),W)[o+$>>>2>>>0]=T,h+=yt(m,T,1/0)+1,$+=4}return 0}function bs(o,d){if(n)return ye(20,1,o,d);o>>>=0,d>>>=0;var m=_s();for(var h of((x(),W)[o>>>2>>>0]=m.length,o=0,m))o+=Er(h)+1;return(x(),W)[d>>>2>>>0]=o,0}function $s(o){return n?ye(21,1,o):52}function vs(o,d,m,h,$){return n?ye(22,1,o,d,m,h,$):52}function xs(o,d,m,h){return n?ye(23,1,o,d,m,h):52}function Ss(o,d,m,h){return n?ye(24,1,o,d,m,h):70}var Cg=[null,[],[]];function ks(o,d,m,h){if(n)return ye(25,1,o,d,m,h);d>>>=0,m>>>=0,h>>>=0;for(var $=0,T=0;T<m;T++){var z=(x(),W)[d>>>2>>>0],R=(x(),W)[d+4>>>2>>>0];d+=8;for(var V=0;V<R;V++){var F=o,ae=(x(),G)[z+V>>>0],de=Cg[F];ae===0||ae===10?((F===1?I:E)(Wa(de)),de.length=0):de.push(ae)}$+=R}return(x(),W)[h>>>2>>>0]=$,0}function zg(o){return o>>>0}n||(function(){for(var o=t.numThreads-1;o--;)Na();kt.push(async()=>{var d=(async function(){if(!n)return Promise.all(it.map(Ra))})();Tt++,await d,--Tt==0&&It&&(d=It,It=null,d())})})(),n||(gt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),j()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>oe(),t.stackRestore=o=>se(o),t.stackAlloc=o=>Ti(o),t.setValue=function(o,d,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(x(),P)[o>>>0]=d;break;case"i16":(x(),H)[o>>>1>>>0]=d;break;case"i32":(x(),O)[o>>>2>>>0]=d;break;case"i64":(x(),K)[o>>>3>>>0]=BigInt(d);break;case"float":(x(),J)[o>>>2>>>0]=d;break;case"double":(x(),_e)[o>>>3>>>0]=d;break;case"*":(x(),W)[o>>>2>>>0]=d;break;default:re(`invalid type for setValue: ${m}`)}},t.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return(x(),P)[o>>>0];case"i16":return(x(),H)[o>>>1>>>0];case"i32":return(x(),O)[o>>>2>>>0];case"i64":return(x(),K)[o>>>3>>>0];case"float":return(x(),J)[o>>>2>>>0];case"double":return(x(),_e)[o>>>3>>>0];case"*":return(x(),W)[o>>>2>>>0];default:re(`invalid type for getValue: ${d}`)}},t.UTF8ToString=Ie,t.stringToUTF8=yt,t.lengthBytesUTF8=Er;var Ts,Is,Dr,st,or,Si,Es,Cs,zs,ki,As,Os,le,ur,Bs,se,Ti,oe,Rs,Ii,Ns,Ds,Ms,Ei,Us,Ps,Ls,qs,Ws,Vs,Gs,Hs,Fs,js,Ks,Zs,Qs,Xs,Ys,Js,eo,to,ro,io,no,ao,so,oo,uo,lo,po,co,ho,fo,mo,go,yo,_o,wo,bo,$o,vo,xo,So,ko,dt,Ag=[Te,xe,Ua,Va,Ga,Ha,Fa,ja,Ka,Za,Qa,Xa,Ya,Ja,es,ts,hs,fs,ms,ws,bs,$s,vs,xs,Ss,ks],Ci={1124124:(o,d,m,h,$)=>{if(t===void 0||!t.jd)return 1;if((o=Ie(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.jd.get(o)))return 2;if(d=Number(d>>>0),m=Number(m>>>0),h=Number(h>>>0),d+m>o.byteLength)return 3;try{let T=o.subarray(d,d+m);switch($){case 0:(x(),G).set(T,h>>>0);break;case 1:t.ae?t.ae(h,T):t.Td(h,T);break;default:return 4}return 0}catch(T){return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(o,d,m)=>{t.Dd(o,(x(),G).subarray(d>>>0,d+m>>>0))},1125084:()=>t.ce(),1125126:o=>{t.Cd(o)},1125163:()=>{t.Md()},1125194:()=>{t.Nd()},1125223:()=>{t.Rd()},1125248:o=>t.Ld(o),1125281:o=>t.Pd(o),1125313:(o,d,m)=>{t.rd(Number(o),Number(d),Number(m),!0)},1125376:(o,d,m)=>{t.rd(Number(o),Number(d),Number(m))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:o=>{t.ic("Abs",o,void 0)},1125541:o=>{t.ic("Neg",o,void 0)},1125592:o=>{t.ic("Floor",o,void 0)},1125645:o=>{t.ic("Ceil",o,void 0)},1125697:o=>{t.ic("Reciprocal",o,void 0)},1125755:o=>{t.ic("Sqrt",o,void 0)},1125807:o=>{t.ic("Exp",o,void 0)},1125858:o=>{t.ic("Erf",o,void 0)},1125909:o=>{t.ic("Sigmoid",o,void 0)},1125964:(o,d,m)=>{t.ic("HardSigmoid",o,{alpha:d,beta:m})},1126043:o=>{t.ic("HardSwish",o,void 0)},1126100:o=>{t.ic("Log",o,void 0)},1126151:o=>{t.ic("Sin",o,void 0)},1126202:o=>{t.ic("Cos",o,void 0)},1126253:o=>{t.ic("Tan",o,void 0)},1126304:o=>{t.ic("Asin",o,void 0)},1126356:o=>{t.ic("Acos",o,void 0)},1126408:o=>{t.ic("Atan",o,void 0)},1126460:o=>{t.ic("Sinh",o,void 0)},1126512:o=>{t.ic("Cosh",o,void 0)},1126564:o=>{t.ic("Asinh",o,void 0)},1126617:o=>{t.ic("Acosh",o,void 0)},1126670:o=>{t.ic("Atanh",o,void 0)},1126723:o=>{t.ic("Tanh",o,void 0)},1126775:o=>{t.ic("Not",o,void 0)},1126826:(o,d,m)=>{t.ic("Clip",o,{min:d,max:m})},1126895:o=>{t.ic("Clip",o,void 0)},1126947:(o,d)=>{t.ic("Elu",o,{alpha:d})},1127005:o=>{t.ic("Gelu",o,void 0)},1127057:o=>{t.ic("Relu",o,void 0)},1127109:(o,d)=>{t.ic("LeakyRelu",o,{alpha:d})},1127173:(o,d)=>{t.ic("ThresholdedRelu",o,{alpha:d})},1127243:(o,d)=>{t.ic("Cast",o,{to:d})},1127301:o=>{t.ic("Add",o,void 0)},1127352:o=>{t.ic("Sub",o,void 0)},1127403:o=>{t.ic("Mul",o,void 0)},1127454:o=>{t.ic("Div",o,void 0)},1127505:o=>{t.ic("Pow",o,void 0)},1127556:o=>{t.ic("Equal",o,void 0)},1127609:o=>{t.ic("Greater",o,void 0)},1127664:o=>{t.ic("GreaterOrEqual",o,void 0)},1127726:o=>{t.ic("Less",o,void 0)},1127778:o=>{t.ic("LessOrEqual",o,void 0)},1127837:(o,d,m,h,$)=>{t.ic("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1128012:(o,d,m,h,$)=>{t.ic("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1128186:(o,d,m,h,$)=>{t.ic("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1128360:(o,d,m,h,$)=>{t.ic("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1128535:(o,d,m,h,$)=>{t.ic("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1128709:(o,d,m,h,$)=>{t.ic("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1128882:(o,d,m,h,$)=>{t.ic("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1129055:(o,d,m,h,$)=>{t.ic("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1129232:(o,d,m,h,$)=>{t.ic("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1129412:(o,d,m,h,$)=>{t.ic("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1129592:o=>{t.ic("Where",o,void 0)},1129645:(o,d,m)=>{t.ic("Transpose",o,{perm:d?Array.from((x(),O).subarray(Number(d)>>>0,Number(m)>>>0)):[]})},1129769:(o,d,m,h)=>{t.ic("DepthToSpace",o,{blocksize:d,mode:Ie(m),format:h?"NHWC":"NCHW"})},1129902:(o,d,m,h)=>{t.ic("DepthToSpace",o,{blocksize:d,mode:Ie(m),format:h?"NHWC":"NCHW"})},1130035:(o,d,m,h)=>{t.ic("DFT",o,{axis:d,inverse:m,onesided:h})},1130127:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e,wt)=>{t.ic("ConvTranspose",o,{format:V?"NHWC":"NCHW",autoPad:d,dilations:[m],group:h,kernelShape:[$],pads:[T,z],strides:[R],wIsConst:()=>!!(x(),P)[F>>>0],outputPadding:ae?Array.from((x(),O).subarray(Number(ae)>>>0,Number(de)>>>0)):[],outputShape:we?Array.from((x(),O).subarray(Number(we)>>>0,Number($e)>>>0)):[],activation:Ie(wt)})},1130560:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e)=>{t.ic("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from((x(),O).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:h,kernelShape:Array.from((x(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[V>>>0],outputPadding:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],outputShape:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(we)>>>0)):[],activation:Ie($e)})},1131221:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e,wt)=>{t.ic("ConvTranspose",o,{format:V?"NHWC":"NCHW",autoPad:d,dilations:[m],group:h,kernelShape:[$],pads:[T,z],strides:[R],wIsConst:()=>!!(x(),P)[F>>>0],outputPadding:ae?Array.from((x(),O).subarray(Number(ae)>>>0,Number(de)>>>0)):[],outputShape:we?Array.from((x(),O).subarray(Number(we)>>>0,Number($e)>>>0)):[],activation:Ie(wt)})},1131654:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e)=>{t.ic("ConvTranspose",o,{format:R?"NHWC":"NCHW",autoPad:d,dilations:Array.from((x(),O).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:h,kernelShape:Array.from((x(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(x(),P)[V>>>0],outputPadding:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],outputShape:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(we)>>>0)):[],activation:Ie($e)})},1132315:(o,d)=>{t.ic("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1132406:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e)=>{t.ic("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:h,storage_order:$,dilations:T?Array.from((x(),O).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((x(),O).subarray(Number(R)>>>0,Number(V)>>>0)):[],pads:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],strides:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(we)>>>0)):[]})},1132885:(o,d)=>{t.ic("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1132976:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e)=>{t.ic("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:h,storage_order:$,dilations:T?Array.from((x(),O).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((x(),O).subarray(Number(R)>>>0,Number(V)>>>0)):[],pads:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],strides:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(we)>>>0)):[]})},1133455:(o,d)=>{t.ic("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1133542:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e)=>{t.ic("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:h,storage_order:$,dilations:T?Array.from((x(),O).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((x(),O).subarray(Number(R)>>>0,Number(V)>>>0)):[],pads:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],strides:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(we)>>>0)):[]})},1134017:(o,d)=>{t.ic("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1134104:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e)=>{t.ic("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:h,storage_order:$,dilations:T?Array.from((x(),O).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:R?Array.from((x(),O).subarray(Number(R)>>>0,Number(V)>>>0)):[],pads:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],strides:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(we)>>>0)):[]})},1134579:(o,d,m,h,$)=>{t.ic("Gemm",o,{alpha:d,beta:m,transA:h,transB:$})},1134683:o=>{t.ic("MatMul",o,void 0)},1134737:(o,d,m,h)=>{t.ic("ArgMax",o,{keepDims:!!d,selectLastIndex:!!m,axis:h})},1134845:(o,d,m,h)=>{t.ic("ArgMin",o,{keepDims:!!d,selectLastIndex:!!m,axis:h})},1134953:(o,d)=>{t.ic("Softmax",o,{axis:d})},1135016:(o,d)=>{t.ic("Concat",o,{axis:d})},1135076:(o,d,m,h,$)=>{t.ic("Split",o,{axis:d,numOutputs:m,splitSizes:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1135232:o=>{t.ic("Expand",o,void 0)},1135286:(o,d)=>{t.ic("Gather",o,{axis:Number(d)})},1135357:(o,d)=>{t.ic("GatherElements",o,{axis:Number(d)})},1135436:(o,d)=>{t.ic("GatherND",o,{batch_dims:Number(d)})},1135515:(o,d,m,h,$,T,z,R,V,F,ae)=>{t.ic("Resize",o,{antialias:d,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Ie($),cubicCoeffA:T,excludeOutside:z,extrapolationValue:R,keepAspectRatioPolicy:Ie(V),mode:Ie(F),nearestMode:Ie(ae)})},1135877:(o,d,m,h,$,T,z)=>{t.ic("Slice",o,{starts:d?Array.from((x(),O).subarray(Number(d)>>>0,Number(m)>>>0)):[],ends:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[],axes:T?Array.from((x(),O).subarray(Number(T)>>>0,Number(z)>>>0)):[]})},1136141:o=>{t.ic("Tile",o,void 0)},1136193:(o,d,m)=>{t.ic("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1136307:(o,d,m)=>{t.ic("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1136421:o=>{t.ic("Range",o,void 0)},1136474:(o,d)=>{t.ic("Einsum",o,{equation:Ie(d)})},1136555:(o,d,m,h,$)=>{t.ic("Pad",o,{mode:d,value:m,pads:h?Array.from((x(),O).subarray(Number(h)>>>0,Number($)>>>0)):[]})},1136698:(o,d,m,h,$,T)=>{t.ic("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!h,format:T?"NHWC":"NCHW"})},1136867:(o,d,m,h,$,T)=>{t.ic("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!h,format:T?"NHWC":"NCHW"})},1137036:(o,d,m)=>{t.ic("CumSum",o,{exclusive:Number(d),reverse:Number(m)})},1137133:(o,d,m)=>{t.ic("DequantizeLinear",o,{axis:d,blockSize:m})},1137223:(o,d,m,h,$)=>{t.ic("GridSample",o,{align_corners:d,mode:Ie(m),padding_mode:Ie(h),format:$?"NHWC":"NCHW"})},1137393:(o,d,m,h,$)=>{t.ic("GridSample",o,{align_corners:d,mode:Ie(m),padding_mode:Ie(h),format:$?"NHWC":"NCHW"})},1137563:(o,d)=>{t.ic("ScatterND",o,{reduction:Ie(d)})},1137648:(o,d,m,h,$,T,z,R,V)=>{t.ic("Attention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:h,scale:$,doRotary:T,qkvHiddenSizes:z?Array.from((x(),O).subarray(Number(R)>>>0,Number(R)+z>>>0)):[],pastPresentShareBuffer:!!V})},1137920:o=>{t.ic("BiasAdd",o,void 0)},1137975:o=>{t.ic("BiasSplitGelu",o,void 0)},1138036:o=>{t.ic("FastGelu",o,void 0)},1138092:(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e,wt,zi)=>{t.ic("Conv",o,{format:de?"NHWC":"NCHW",auto_pad:d,dilations:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(h)>>>0)):[],group:$,kernel_shape:T?Array.from((x(),O).subarray(Number(T)>>>0,Number(z)>>>0)):[],pads:R?Array.from((x(),O).subarray(Number(R)>>>0,Number(V)>>>0)):[],strides:F?Array.from((x(),O).subarray(Number(F)>>>0,Number(ae)>>>0)):[],w_is_const:()=>!!(x(),P)[Number(we)>>>0],activation:Ie($e),activation_params:wt?Array.from((x(),J).subarray(Number(wt)>>>0,Number(zi)>>>0)):[]})},1138676:o=>{t.ic("Gelu",o,void 0)},1138728:(o,d,m,h,$,T,z,R,V)=>{t.ic("GroupQueryAttention",o,{numHeads:d,kvNumHeads:m,scale:h,softcap:$,doRotary:T,rotaryInterleaved:z,smoothSoftmax:R,localWindowSize:V})},1138945:(o,d,m,h)=>{t.ic("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!h})},1139056:(o,d,m,h)=>{t.ic("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!h})},1139167:(o,d,m,h,$,T)=>{t.ic("MatMulNBits",o,{k:d,n:m,accuracyLevel:h,bits:$,blockSize:T})},1139294:(o,d,m,h,$,T)=>{t.ic("MultiHeadAttention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:h,scale:$,doRotary:T})},1139453:(o,d)=>{t.ic("QuickGelu",o,{alpha:d})},1139517:(o,d,m,h,$)=>{t.ic("RotaryEmbedding",o,{interleaved:!!d,numHeads:m,rotaryEmbeddingDim:h,scale:$})},1139656:(o,d,m)=>{t.ic("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1139758:(o,d,m)=>{t.ic("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1139860:(o,d,m,h)=>{t.ic("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:m,blockSize:h})},1139981:o=>{t.Qd(o)},1140015:(o,d)=>t.Sd(Number(o),Number(d),t.hd.Vd,t.hd.errors)};function Og(o,d,m){return us(async()=>{await t.Od(Number(o),Number(d),Number(m))})}function Bg(){return typeof wasmOffsetConverter<"u"}function Rg(o,d,m,h){var $=oe();try{return Fs(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function Ng(o,d,m){var h=oe();try{return Gs(o,d,m)}catch($){if(se(h),$!==$+0)throw $;le(1,0)}}function Dg(o){var d=oe();try{Ws(o)}catch(m){if(se(d),m!==m+0)throw m;le(1,0)}}function Mg(o,d){var m=oe();try{return Ei(o,d)}catch(h){if(se(m),h!==h+0)throw h;le(1,0)}}function Ug(o,d,m){var h=oe();try{Ms(o,d,m)}catch($){if(se(h),$!==$+0)throw $;le(1,0)}}function Pg(o,d,m,h){var $=oe();try{return Xs(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function Lg(o,d){var m=oe();try{js(o,d)}catch(h){if(se(m),h!==h+0)throw h;le(1,0)}}function qg(o,d,m,h,$,T,z){var R=oe();try{return Hs(o,d,m,h,$,T,z)}catch(V){if(se(R),V!==V+0)throw V;le(1,0)}}function Wg(o,d,m,h,$,T){var z=oe();try{Us(o,d,m,h,$,T)}catch(R){if(se(z),R!==R+0)throw R;le(1,0)}}function Vg(o,d,m,h){var $=oe();try{Ls(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function Gg(o,d,m,h,$){var T=oe();try{Vs(o,d,m,h,$)}catch(z){if(se(T),z!==z+0)throw z;le(1,0)}}function Hg(o,d,m,h,$,T,z){var R=oe();try{Zs(o,d,m,h,$,T,z)}catch(V){if(se(R),V!==V+0)throw V;le(1,0)}}function Fg(o,d,m,h,$,T,z){var R=oe();try{Qs(o,d,m,h,$,T,z)}catch(V){if(se(R),V!==V+0)throw V;le(1,0)}}function jg(o,d,m,h,$,T,z,R){var V=oe();try{to(o,d,m,h,$,T,z,R)}catch(F){if(se(V),F!==F+0)throw F;le(1,0)}}function Kg(o,d,m,h,$){var T=oe();try{return Ks(o,d,m,h,$)}catch(z){if(se(T),z!==z+0)throw z;le(1,0)}}function Zg(o,d,m){var h=oe();try{return qs(o,d,m)}catch($){if(se(h),$!==$+0)throw $;le(1,0)}}function Qg(o,d,m,h,$,T,z,R){var V=oe();try{ro(o,d,m,h,$,T,z,R)}catch(F){if(se(V),F!==F+0)throw F;le(1,0)}}function Xg(o,d,m,h,$,T,z,R,V,F,ae,de){var we=oe();try{Ys(o,d,m,h,$,T,z,R,V,F,ae,de)}catch($e){if(se(we),$e!==$e+0)throw $e;le(1,0)}}function Yg(o,d,m){var h=oe();try{return io(o,d,m)}catch($){if(se(h),$!==$+0)throw $;return le(1,0),BigInt(0)}}function Jg(o,d,m,h,$,T,z,R,V){var F=oe();try{Ps(o,d,m,h,$,T,z,R,V)}catch(ae){if(se(F),ae!==ae+0)throw ae;le(1,0)}}function e0(o){var d=oe();try{return no(o)}catch(m){if(se(d),m!==m+0)throw m;le(1,0)}}function t0(o,d){var m=oe();try{return bo(o,d)}catch(h){if(se(m),h!==h+0)throw h;return le(1,0),BigInt(0)}}function r0(o,d,m,h){var $=oe();try{return ao(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function i0(o,d,m,h,$,T,z){var R=oe();try{$o(o,d,m,h,$,T,z)}catch(V){if(se(R),V!==V+0)throw V;le(1,0)}}function n0(o){var d=oe();try{return so(o)}catch(m){if(se(d),m!==m+0)throw m;return le(1,0),BigInt(0)}}function a0(o,d,m,h,$){var T=oe();try{return ho(o,d,m,h,$)}catch(z){if(se(T),z!==z+0)throw z;le(1,0)}}function s0(o,d,m,h,$,T){var z=oe();try{return fo(o,d,m,h,$,T)}catch(R){if(se(z),R!==R+0)throw R;le(1,0)}}function o0(o,d,m,h,$,T){var z=oe();try{return Js(o,d,m,h,$,T)}catch(R){if(se(z),R!==R+0)throw R;le(1,0)}}function u0(o,d,m,h,$,T){var z=oe();try{return mo(o,d,m,h,$,T)}catch(R){if(se(z),R!==R+0)throw R;le(1,0)}}function l0(o,d,m,h,$,T,z,R){var V=oe();try{return eo(o,d,m,h,$,T,z,R)}catch(F){if(se(V),F!==F+0)throw F;le(1,0)}}function d0(o,d,m,h,$){var T=oe();try{return go(o,d,m,h,$)}catch(z){if(se(T),z!==z+0)throw z;return le(1,0),BigInt(0)}}function p0(o,d,m,h){var $=oe();try{return yo(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function c0(o,d,m,h){var $=oe();try{return _o(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function h0(o,d,m,h,$,T,z,R,V,F,ae,de){var we=oe();try{return wo(o,d,m,h,$,T,z,R,V,F,ae,de)}catch($e){if(se(we),$e!==$e+0)throw $e;le(1,0)}}function f0(o,d,m,h,$,T,z,R,V,F,ae){var de=oe();try{po(o,d,m,h,$,T,z,R,V,F,ae)}catch(we){if(se(de),we!==we+0)throw we;le(1,0)}}function m0(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e,wt,zi){var w0=oe();try{co(o,d,m,h,$,T,z,R,V,F,ae,de,we,$e,wt,zi)}catch(Ai){if(se(w0),Ai!==Ai+0)throw Ai;le(1,0)}}function g0(o,d,m){var h=oe();try{return oo(o,d,m)}catch($){if(se(h),$!==$+0)throw $;le(1,0)}}function y0(o,d,m){var h=oe();try{return uo(o,d,m)}catch($){if(se(h),$!==$+0)throw $;le(1,0)}}function _0(o,d,m,h){var $=oe();try{lo(o,d,m,h)}catch(T){if(se($),T!==T+0)throw T;le(1,0)}}function Mr(){if(0<Tt)It=Mr;else if(n)v==null||v(t),Z();else{for(var o=kt;0<o.length;)o.shift()(t);0<Tt?It=Mr:(t.calledRun=!0,C||(Z(),v==null||v(t)))}}return n||(dt=await fe(),Mr()),t.PTR_SIZE=4,q?t:new Promise((o,d)=>{v=o,S=d})}var Up,Oo,F0=M(()=>{"use strict";var e,t;Up=Ao,Oo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Oo&&Ao()}),Li,Mn,Bo,Le,Pp,Pr,Ro,No,qi,Do,Wi,Lp,Vi,qp,na=M(()=>{"use strict";ia(),Li=typeof location>"u"?void 0:location.origin,Mn=rt.url>"file:"&&rt.url<"file;",Bo=()=>{if(Mn){let e=URL;return new URL(new e("ort.bundle.min.mjs",rt.url).href,Li).href}return rt.url},Le=Bo(),Pp=()=>{if(Le&&!Le.startsWith("blob:"))return Le.substring(0,Le.lastIndexOf("/")+1)},Pr=(e,t)=>{try{let r=t!=null?t:Le;return(r?new URL(e,r):new URL(e)).origin===Li}catch(r){return!1}},Ro=(e,t)=>{let r=t!=null?t:Le;try{return(r?new URL(e,r):new URL(e)).href}catch(i){return}},No=(e,t)=>`${t!=null?t:"./"}${e}`,qi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Do=async e=>(await import(e)).default,Wi=(H0(),Sr(Np)).default,Lp=async()=>{if(!Le)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Pr(Le))return[void 0,Wi()];let e=await qi(Le);return[e,Wi(e)]},Vi=(F0(),Sr(Mp)).default,qp=async(e,t,r,i)=>{let n=Vi&&!(e||t);if(n)if(Le)n=Pr(Le)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Vi];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e!=null?e:Ro(a,t),u=r&&s&&!Pr(s,t),l=u?await qi(s):s!=null?s:No(a,t);return[u?l:void 0,await Do(l)]}}}),Gi,Lr,lr,Hi,Mo,Uo,Po,aa,me,Zt=M(()=>{"use strict";na(),Lr=!1,lr=!1,Hi=!1,Mo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch(e){return!1}},Uo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch(e){return!1}},Po=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch(e){return!1}},aa=async e=>{var v,S;if(Lr)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Hi)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Po())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Uo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Mo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,u=(v=s==null?void 0:s.href)!=null?v:s,l=n==null?void 0:n.wasm,p=(S=l==null?void 0:l.href)!=null?S:l,c=e.wasmBinary,[f,g]=await qp(u,a,r>1,!!c||!!p),_=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),y.push(new Promise((w,b)=>{let k={numThreads:r};if(c)k.wasmBinary=c,k.locateFile=I=>I;else if(p||a)k.locateFile=I=>p!=null?p:a+I;else if(u&&u.indexOf("blob:")!==0)k.locateFile=I=>new URL(I,u).href;else if(f){let I=Pp();I&&(k.locateFile=E=>I+E)}g(k).then(I=>{lr=!1,Lr=!0,Gi=I,w(),f&&URL.revokeObjectURL(f)},I=>{lr=!1,Hi=!0,b(I)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},me=()=>{if(Lr&&Gi)return Gi;throw new Error("WebAssembly is not initialized yet.")}}),tt,ti,he,sa=M(()=>{"use strict";Zt(),tt=(e,t)=>{let r=me(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},ti=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")ti(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},he=e=>{let t=me(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Wp,j0=M(()=>{"use strict";Zt(),sa(),Wp=(e,t)=>{let r=me(),i=0,n=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let s=0;(e==null?void 0:e.tag)!==void 0&&(s=tt(e.tag,n)),i=r._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),i===0&&he("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ti(e.extra,"",new WeakSet,(u,l)=>{let p=tt(u,n),c=tt(l,n);r._OrtAddRunConfigEntry(i,p,c)!==0&&he(`Can't set a run config entry: ${u} - ${l}.`)});for(let u of t)r._OrtRunOptionsAddActiveLoraAdapter(i,u)!==0&&he("Can't add an active LoRA adapter.");return[i,n]}catch(s){throw i!==0&&r._OrtReleaseRunOptions(i),n.forEach(u=>r._free(u)),s}}}),Lo,qo,Wo,Rt,Vo,Vp,K0=M(()=>{"use strict";Zt(),sa(),Lo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},qo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Wo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Rt=(e,t,r,i)=>{let n=tt(t,i),a=tt(r,i);me()._OrtAddSessionConfigEntry(e,n,a)!==0&&he(`Can't set a session config entry: ${t} - ${r}.`)},Vo=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[],u;switch(a){case"webnn":if(a="WEBNN",Rt(e,"session.disable_quant_qdq","1",r),Rt(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let g=n==null?void 0:n.deviceType;g&&Rt(e,"deviceType",g,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let g=n;if(g!=null&&g.preferredLayout){if(g.preferredLayout!=="NCHW"&&g.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${g.preferredLayout}`);Rt(e,"preferredLayout",g.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let l=s.length,p=0,c=0;if(l>0){p=me()._malloc(l*me().PTR_SIZE),r.push(p),c=me()._malloc(l*me().PTR_SIZE),r.push(c);for(let g=0;g<l;g++)me().setValue(p+g*me().PTR_SIZE,s[g][0],"*"),me().setValue(c+g*me().PTR_SIZE,s[g][1],"*")}let f;if(u!==void 0){let g=me()._malloc(me().PTR_SIZE);r.push(g),me().setValue(g,u[0],"*"),f=await me()._OrtAppendExecutionProviderV2(e,g,1,p,c,l)}else{let g=tt(a,r);f=await me()._OrtAppendExecutionProvider(e,g,p,c,l)}f!==0&&he(`Can't append execution provider: ${a}.`)}},Vp=async e=>{var a,s,u,l;let t=me(),r=0,i=[],n=e||{};Wo(n);try{let p=Lo((a=n.graphOptimizationLevel)!=null?a:"all"),c=qo((s=n.executionMode)!=null?s:"sequential"),f=typeof n.logId=="string"?tt(n.logId,i):0,g=(u=n.logSeverityLevel)!=null?u:2;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log severity level is not valid: ${g}`);let _=(l=n.logVerbosityLevel)!=null?l:0;if(!Number.isInteger(_)||_<0||_>4)throw new Error(`log verbosity level is not valid: ${_}`);let y=typeof n.optimizedModelFilePath=="string"?tt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(p,!!n.enableCpuMemArena,!!n.enableMemPattern,c,!!n.enableProfiling,0,f,g,_,y),r===0&&he("Can't create session options."),n.executionProviders&&await Vo(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Rt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[v,S]of Object.entries(n.freeDimensionOverrides)){if(typeof v!="string")throw new Error(`free dimension override name must be a string: ${v}`);if(typeof S!="number"||!Number.isInteger(S)||S<0)throw new Error(`free dimension override value must be a non-negative integer: ${S}`);let w=tt(v,i);t._OrtAddFreeDimensionOverride(r,w,S)!==0&&he(`Can't set a free dimension override: ${v} - ${S}.`)}return n.extra!==void 0&&ti(n.extra,"",new WeakSet,(v,S)=>{Rt(r,v,S,i)}),[r,i]}catch(p){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&he("Can't release session options."),i.forEach(c=>t._free(c)),p}}}),qt,ft,Wt,ui,ri,oa,ua,Un,ee=M(()=>{"use strict";qt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ft=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Wt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},ui=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ri=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},oa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ua=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Un=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),li,la=M(()=>{"use strict";ia(),li=async e=>{if(typeof e=="string")if(0)try{}catch(a){if(a.code==="ERR_FS_FILE_TOO_LARGE")try{for(var t,r,i,n;r=!(i=await t.next()).done;r=!1){let p=i.value;;}}catch(i){n=[i]}finally{try{r&&(i=t.return)&&await i.call(t)}finally{if(n)throw n[0]}}}else{let a=await fetch(e);if(!a.ok)throw new Error(`failed to load external data file: ${e}`);let s=a.headers.get("Content-Length"),u=s?parseInt(s,10):0;if(u<1073741824)return new Uint8Array(await a.arrayBuffer());{if(!a.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let l=a.body.getReader(),p;try{p=new ArrayBuffer(u)}catch(f){if(f instanceof RangeError){let g=Math.ceil(u/65536);p=new WebAssembly.Memory({initial:g,maximum:g}).buffer}else throw f}let c=0;for(;;){let{done:f,value:g}=await l.read();if(f)break;let _=g.byteLength;new Uint8Array(p,c,_).set(g),c+=_}return new Uint8Array(p,0,u)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Go,Ho,Fo,jo,da,Ko,pe,mt=M(()=>{"use strict";ee(),Go=["V","I","W","E","F"],Ho=(e,t)=>{console.log(`[${Go[e]},${new Date().toISOString()}]${t}`)},da=(e,t)=>{Fo=e,jo=t},Ko=(e,t)=>{let r=ri(e),i=ri(Fo);r>=i&&Ho(r,typeof t=="function"?t():t)},pe=(...e)=>{jo&&Ko(...e)}}),Zo,rr,B,ii,Gp,Hp,Fp,ie=M(()=>{"use strict";Zo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},rr=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let u=Zo.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[s[a-2],s[a-1]]=u}for(let u=r?3:1;u<=a;u++){let l=i-u<0?1:e[i-u],p=n-u<0?1:t[n-u];if(l!==p&&l>1&&p>1)return;let c=Math.max(l,p);if(l&&p)s[a-u]=Math.max(l,p);else{if(c>1)return;s[a-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},B=class Yr{static size(t){return Yr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Yr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Yr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r!=null?r:t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},ii=class vt{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,u){if(u){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)vt.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,n,a,s,u,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return vt.computeShapeHelper(t,r,p,i,n,a,s,u,l),p}static computeConvOutputShape(t,r,i,n,a,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return vt.computeShapeHelper(!1,t,l,i,n,a,s,u),l}static computeShapeHelper(t,r,i,n,a,s,u,l,p=0){if(t)for(let c=0;c<r.length-2;c++)i.push(1);else for(let c=0;c<r.length-2;c++)i.push(vt.adjustPadAndReturnShape(r[c+2],n[c],a[c],s[c],u,c,c+r.length-2,l,p))}static computeOutputSize(t,r,i,n,a){let s=Math.floor(t/r)+1;return a===1&&(s=Math.ceil(t/r)+1,(s-1)*r>=i+n&&(s-=1)),s}static adjustPadAndReturnShape(t,r,i,n,a,s,u,l,p=0){let c=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[u]=0,vt.computeOutputSize(t-c,r,t,0,p);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=(Math.floor((t+r-1)/r)-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),a[u]=f-a[s],vt.computeOutputSize(t+a[s]+a[u]-c,r,t,a[s],p)}default:throw new Error("Unsupported AutoPad type")}else return vt.computeOutputSize(t+a[s]+a[u]-c,r,t,a[s],p)}},Gp=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,u;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(n&&!rr.isValidBroadcast(n,[a,u]))throw new Error("gemm: invalid bias shape for broadcast");return[a,u,s]}},Hp=-34028234663852886e22,Fp=34028234663852886e22}),pa,jp=M(()=>{"use strict";ee(),pa=(e,t)=>new(ui(t))(e)}),Fi,Qo,ji,Xo,Ki,Yo,Zi,Qi,Xi,Jo,Kp,Z0=M(()=>{"use strict";ee(),mt(),Fi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Qo=(e,t)=>{if(t==="int32")return e;let r=Fi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(ui(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let u=0;u<n;u++){let l=a[u];if(l>BigInt(2147483647)||l<-BigInt(2147483648))throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},ji=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Xo=1,Ki=()=>Xo++,Yo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Zi=(e,t)=>{let r=Fi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Zi(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=ji(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Xi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Yo.get(t),!s||!(a!=null&&a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Zi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Qo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?ji(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Jo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ki();return this.tensorTrackersById.set(e,new Xi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Ki(),s=new Qi({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Xi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let u=this.getMLContext(e);for(let[p,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(p,1)[0];return f.sessionId=e,f}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s!=null?s:t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new Qi({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Kp=(...e)=>new Jo(...e)}),dr,eu,Zp,Q0=M(()=>{"use strict";ee(),Zt(),jp(),Z0(),mt(),dr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),eu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},Zp=class{constructor(e){this.tensorManager=Kp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,da(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>eu(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=dr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e!=null?e:this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=dr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return pa(r,t)}}registerMLTensor(e,t,r,i){let n=dr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=dr.get(qt(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),ca=M(()=>{"use strict"}),Yi,qr,Wr,tu,ru,Ji,Pn,iu,Qp,X0=M(()=>{"use strict";mt(),ca(),Yi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),qr=[],Wr=e=>Math.ceil(Number(e)/16)*16,tu=e=>{for(let t=0;t<qr.length;t++){let r=qr[t];if(e<=r)return r}return Math.ceil(e/16)*16},ru=1,Ji=()=>ru++,Pn=async(e,t,r,i)=>{let n=Wr(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let u=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{a.destroy()}},iu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Yi)qr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Wr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);if(a===n&&i%4===0)this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,r,i,n);else{let u=new Uint8Array(a);u.set(t),this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,u,0,a)}pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Wr(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Ji();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=tu(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ji(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Pn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Yi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Qp=(...e)=>new iu(...e)}),nu,ge,ke=M(()=>{"use strict";nu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ge=e=>new nu(e)}),ir,Vr,ze,Ce,Y,Se,Ln,tr,xt,X,pr,N,Q,Xp,ha,au,Yp,ne=M(()=>{"use strict";ee(),ie(),ir=64,Vr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ze=(e,t=1)=>{let r=Vr(e,t);return typeof r=="string"?r:r[0]},Ce=(e,t=1)=>{let r=Vr(e,t);return typeof r=="string"?r:r[1]},Y=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:B.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,Ln=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,tr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,xt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,pr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=Vr(t,n),c=typeof p=="string"?p:p[1],f=typeof p=="string"?p:p[0],g={indices:l,value:c,storage:f,tensor:t},_=L=>typeof L=="string"?L:`${L}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},v=a?"uniforms.":"",S=`${v}${e}_shape`,w=`${v}${e}_strides`,b="";for(let L=0;L<s-1;L++)b+=`
    let dim${L} = current / ${X(w,L,s)};
    let rest${L} = current % ${X(w,L,s)};
    indices[${L}] = dim${L};
    current = rest${L};
    `;b+=`indices[${s-1}] = current;`;let k=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${b}
    return indices;
  }`,I=L=>(y.offsetToIndices=!0,s<2?L:`o2i_${e}(${L})`),E=[];if(s>=2)for(let L=s-1;L>=0;L--)E.push(`${X(w,L,s)} * (indices[${L}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=L=>(y.indicesToOffset=!0,s<2?L:`i2o_${e}(${L})`),x=(...L)=>s===0?"0u":`${g.indices}(${L.map(_).join(",")})`,D=(L,q)=>s<2?`${L}`:`${X(L,q,s)}`,U=(L,q,j)=>s<2?`${L}=${j};`:`${X(L,q,s)}=${j};`,P={},G=(L,q)=>{y.broadcastedIndicesToOffset=!0;let j=`${q.name}broadcastedIndicesTo${e}Offset`;if(j in P)return`${j}(${L})`;let Z=[];for(let re=s-1;re>=0;re--){let Ee=q.indicesGet("outputIndices",re+q.rank-s);Z.push(`${D(w,re)} * (${Ee} % ${D(S,re)})`)}return P[j]=`fn ${j}(outputIndices: ${q.type.indices}) -> u32 {
             return ${Z.length>0?Z.join("+"):"0u"};
           }`,`${j}(${L})`},H=(L,q)=>(()=>{if(g.storage===g.value)return`${e}[${L}]=${q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${L}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${L}]=vec2<u32>(u32(${q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${L}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),te=L=>(()=>{if(g.storage===g.value)return`${e}[${L}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${L}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${L}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${L}] & 0xFFu), bool(${e}[${L}] & 0xFF00u), bool(${e}[${L}] & 0xFF0000u), bool(${e}[${L}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),O=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${te(`i2o_${e}(indices)`)};
  }`,W=s<2?"":(()=>{let L=u.map(j=>`d${j}: u32`).join(", "),q=u.map(j=>`d${j}`).join(", ");return`
  fn get_${e}(${L}) -> ${c} {
    return get_${e}ByIndices(${x(q)});
  }`})(),J=(...L)=>{if(L.length!==s)throw new Error(`indices length must be ${s}`);let q=L.map(_).join(",");return s===0?te("0u"):s===1?te(q[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${q})`)},_e=L=>s<2?te(L):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${L})`),K=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,ue=s<2?"":(()=>{let L=u.map(j=>`d${j}: u32`).join(", "),q=u.map(j=>`d${j}`).join(", ");return`
  fn set_${e}(${L}, value: ${c}) {
    set_${e}ByIndices(${x(q)}, value);
  }`})();return{impl:()=>{let L=[],q=!1;return y.offsetToIndices&&(L.push(k),q=!0),y.indicesToOffset&&(L.push(C),q=!0),y.broadcastedIndicesToOffset&&(Object.values(P).forEach(j=>L.push(j)),q=!0),y.set&&(L.push(ue),q=!0),y.setByIndices&&(L.push(K),q=!0),y.get&&(L.push(W),q=!0),y.getByIndices&&(L.push(O),q=!0),!a&&q&&L.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${w} = ${g.indices}(${B.computeStrides(r).join(",")});`),L.join(`
`)},type:g,offsetToIndices:I,indicesToOffset:A,broadcastedIndicesToOffset:G,indices:x,indicesGet:D,indicesSet:U,set:(...L)=>{if(L.length!==s+1)throw new Error(`indices length must be ${s}`);let q=L[s];if(typeof q!="string")throw new Error("value must be string");let j=L.slice(0,s).map(_).join(",");return s===0?H("0u",q):s===1?H(j[0],q):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${j}, ${q})`)},setByOffset:H,setByIndices:(L,q)=>s<2?H(L,q):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${L}, ${q});`),get:J,getByOffset:te,getByIndices:_e,usage:i,name:e,strides:w,shape:S,rank:s}},N=(e,t,r,i=1)=>pr(e,t,r,"input",i),Q=(e,t,r,i=1)=>pr(e,t,r,"output",i),Xp=(e,t,r)=>pr(e,t,r,"atomicOutput",1),ha=(e,t,r,i=1)=>pr(e,t,r,"internal",i),au=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ir){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>{var r;return[e(t.type),(r=t.length)!=null?r:1]})}},Yp=(e,t)=>new au(e,t)}),su,en,ou,uu,lu,du,Ve,Jp,ec,St=M(()=>{"use strict";ee(),ie(),ke(),ne(),su=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},en=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ou=(e,t)=>B.sortBasedOnPerm(e,en(e.length,t)),uu=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},lu=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},du=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ve=(e,t)=>{let r=e.dataType,i=e.dims.length,n=en(i,t),a=ou(e.dims,n),s=e.dims,u=a,l=i<2||du(n,e.dims),p;if(l)return p=y=>{let v=N("input",r,s,4),S=Q("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(v,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:p};let{newShape:c,newPerm:f}=lu(e.dims,n),g=B.areEqual(f,[2,3,1]),_=B.areEqual(f,[3,1,2]);if(c.length===2||g||_){s=g?[c[0],c[1]*c[2]]:_?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let y=16;return p=v=>{let S=N("a",r,s.length),w=Q("output",r,u.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(S,w)}
  var<workgroup> tile : array<array<${w.type.value}, ${y+1}>, ${y}>;
  ${v.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${w.setByIndices(`${w.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:v},...Y(s,u)]}},getShaderSource:p}}return p=y=>{let v=N("a",r,s.length),S=Q("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(v,S)}

  ${uu(n,i,v,S)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Y(s,u)]}},getShaderSource:p}},Jp=(e,t)=>{su(e.inputs,t.perm),e.compute(Ve(e.inputs[0],t.perm))},ec=e=>ge({perm:e.perm})}),pu,cu,hu,fu,mu,gu,yu,_u,wu,bu,Qe,tc,rc,ic,nc,ac,sc,oc,uc,lc,dc,Y0=M(()=>{"use strict";ee(),ie(),ne(),fa(),St(),pu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},cu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},hu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},fu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},mu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},gu=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},yu=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},_u=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},wu=(e,t)=>{let r=[];if(!_u(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},bu=(e,t,r,i,n,a,s)=>{let u=r[0].dims,l=B.size(a),p=B.size(s),c=N("_A",r[0].dataType,u),f=Q("output",n,a),g=64;l===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=v=>`
        ${v.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${v.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${hu[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${pu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${cu[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${fu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Qe=(e,t,r,i)=>{let n=e.inputs.length===1?r:qn(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((_,y)=>y));let s=B.normalizeAxes(a,e.inputs[0].dims.length),u=s,l=e.inputs[0],p=wu(u,e.inputs[0].dims.length);p.length>0&&(l=e.compute(Ve(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=mu(u.length,l.dims.length));let[c,f]=gu(l.dims,u),g=c;n.keepDims&&(g=yu(c,s)),e.compute(bu(t,n.cacheKey,[l],i,e.inputs[0].dataType,g,f),{inputs:[l]})},tc=(e,t)=>{Qe(e,"ReduceMeanShared",t,"mean")},rc=(e,t)=>{Qe(e,"ReduceL1Shared",t,"l1")},ic=(e,t)=>{Qe(e,"ReduceL2Shared",t,"l2")},nc=(e,t)=>{Qe(e,"ReduceLogSumExpShared",t,"logSumExp")},ac=(e,t)=>{Qe(e,"ReduceMaxShared",t,"max")},sc=(e,t)=>{Qe(e,"ReduceMinShared",t,"min")},oc=(e,t)=>{Qe(e,"ReduceProdShared",t,"prod")},uc=(e,t)=>{Qe(e,"ReduceSumShared",t,"sum")},lc=(e,t)=>{Qe(e,"ReduceSumSquareShared",t,"sumSquare")},dc=(e,t)=>{Qe(e,"ReduceLogSumShared",t,"logSum")}}),Xe,$u,ni,qn,Ye,vu,xu,Su,ku,Tu,Iu,Eu,Cu,zu,Au,Je,pc,cc,hc,fc,mc,gc,yc,_c,wc,bc,fa=M(()=>{"use strict";ee(),ie(),ke(),ne(),Y0(),Xe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},$u=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ni=(e,t,r,i,n,a,s=!1,u=!1)=>{let l=[],p=r[0].dims,c=p.length,f=B.normalizeAxes(n,c),g=!u&&f.length===0;p.forEach((v,S)=>{g||f.indexOf(S)>=0?s&&l.push(1):l.push(v)});let _=l.length,y=B.size(l);return{name:e,shaderCache:t,getShaderSource:v=>{let S=[],w=N("_A",r[0].dataType,c),b=Q("output",a,_),k=i(w,b,f),I=k[2];for(let E=0,C=0;E<c;E++)g||f.indexOf(E)>=0?(s&&C++,I=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${w.indicesSet("input_indices",E,`j${E}`)}
                  ${I}
                }`):(S.push(`${w.indicesSet("input_indices",E,b.indicesGet("output_indices",C))};`),C++);return`

        ${v.registerUniform("output_size","u32").declareVariables(w,b)}

        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${w.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${I}
          ${k[3]}
          ${k.length===4?b.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...Y(p,l)]})}},qn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ge({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ye=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:qn(n,r);e.compute(ni(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?$u:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},vu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},xu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Su=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ku=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Tu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Iu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},Eu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Cu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},zu=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Au=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Je=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},pc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iu(e,t):tc(e,t)},cc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xu(e,t):rc(e,t)},hc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Su(e,t):ic(e,t)},fc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ku(e,t):nc(e,t)},mc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tu(e,t):ac(e,t)},gc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eu(e,t):sc(e,t)},yc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cu(e,t):oc(e,t)},_c=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zu(e,t):uc(e,t)},wc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Au(e,t):lc(e,t)},bc=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vu(e,t):dc(e,t)}}),tn,$c,vc,Wn,J0=M(()=>{"use strict";ee(),ke(),fa(),tn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},$c=(e,t)=>{tn(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ni("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},vc=(e,t)=>{tn(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ni("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Wn=e=>ge(e)}),Ou,Gr,Bu,Ru,Nu,kr,Du,xc,ma=M(()=>{"use strict";ee(),ie(),ca(),ne(),Ou=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,g=f,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=p;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let v=0;if(s){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(v=s.dims[3])}let S=y+v,w=-1,b=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:p,pastSequenceLength:v,kvSequenceLength:y,totalSequenceLength:S,maxSequenceLength:w,inputHiddenSize:c,hiddenSize:f,vHiddenSize:_,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Gr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Bu=(e,t,r,i,n,a,s,u)=>{let l=Se(s?1:a),p=64,c=a/l;c<p&&(p=32);let f=Math.ceil(a/l/p),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:f}],_=ze(e.dataType,l),y=Ce(1,l),v=["type"];s&&v.push("type"),u&&v.push("type");let S=w=>{let b=Q("x",e.dataType,e.dims,l),k=[b],I=s?N("seq_lens",s.dataType,s.dims):void 0;I&&k.push(I);let E=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;E&&k.push(E);let C=Ce(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${w.registerUniforms(A).declareVariables(...k)}
  ${w.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Gr(I,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${_};${l}`,inputDependencies:v},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},Ru=(e,t,r,i,n,a,s,u,l)=>{let p=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,p],f=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=f?[a.batchSize,g,p,a.headSize]:void 0,y=a.nReps?a.nReps:1,v=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=Se(a.headSize),w=a.headSize/S,b=12,k={x:Math.ceil(p/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},I=[{type:12,data:a.sequenceLength},{type:12,data:w},{type:12,data:p},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:v},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:y}],E=f&&i&&B.size(i.dims)>0,C=["type","type"];E&&C.push("type"),n&&C.push("type"),u&&C.push("type"),l&&C.push("type");let A=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&A.push({dims:_,dataType:t.dataType,gpuDataType:0});let x=D=>{let U=N("q",t.dataType,t.dims,S),P=N("key",r.dataType,r.dims,S),G=[U,P];if(E){let K=N("past_key",i.dataType,i.dims,S);G.push(K)}n&&G.push(N("attention_bias",n.dataType,n.dims));let H=u?N("seq_lens",u.dataType,u.dims):void 0;H&&G.push(H);let te=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;te&&G.push(te);let O=Q("output",t.dataType,c),W=[O];f&&W.push(Q("present_key",t.dataType,_,S));let J=Ce(1,S),_e=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${U.type.storage}, ${b*b}>;
  ${D.registerUniforms(_e).declareVariables(...G,...W)}
  ${D.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Gr(H,te,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${O.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:A,dispatchGroup:k,programUniforms:I}),getShaderSource:x}},Nu=(e,t,r,i,n,a,s=void 0,u=void 0)=>{let l=a+n.kvSequenceLength,p=n.nReps?n.nReps:1,c=n.vHiddenSize*p,f=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=f?[n.batchSize,g,l,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,c],v=12,S={x:Math.ceil(n.vHeadSize/v),y:Math.ceil(n.sequenceLength/v),z:n.batchSize*n.numHeads},w=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:p}],b=f&&i&&B.size(i.dims)>0,k=["type","type"];b&&k.push("type"),s&&k.push("type"),u&&k.push("type");let I=[{dims:y,dataType:t.dataType,gpuDataType:0}];f&&I.push({dims:_,dataType:t.dataType,gpuDataType:0});let E=C=>{let A=N("probs",t.dataType,t.dims),x=N("v",r.dataType,r.dims),D=[A,x];b&&D.push(N("past_value",i.dataType,i.dims));let U=s?N("seq_lens",s.dataType,s.dims):void 0;s&&D.push(U);let P=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(P);let G=[Q("output",t.dataType,y)];f&&G.push(Q("present_value",t.dataType,_));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;
  var<workgroup> tileQ: array<${A.type.value}, ${v*v}>;
  var<workgroup> tileV: array<${A.type.value}, ${v*v}>;
  ${C.registerUniforms(H).declareVariables(...D,...G)}
  ${C.mainStart([v,v,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Gr(U,P,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:I,dispatchGroup:S,programUniforms:w}),getShaderSource:E}},kr=(e,t,r,i,n,a,s,u,l,p,c=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),_=g>1?s:void 0,y=g>1?u:void 0,v=g>1?p.pastSequenceLength:0,S=v+p.kvSequenceLength,w=l&&B.size(l.dims)>0?l:void 0,b=[t,r];_&&B.size(_.dims)>0&&b.push(_),w&&b.push(w),c&&b.push(c),f&&b.push(f);let k=e.compute(Ru(g,t,r,_,w,p,v,c,f),{inputs:b,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Bu(k,p.batchSize,p.numHeads,v,p.sequenceLength,S,c,f),{inputs:c&&f?[k,c,f]:[k],outputs:[]});let I=[k,i];y&&B.size(y.dims)>0&&I.push(y),c&&I.push(c),f&&I.push(f),e.compute(Nu(g,k,i,y,p,v,c,f),{inputs:I,outputs:g>1?[0,2]:[0]})},Du=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let g=Q("output_q",l[0].dataType,r),_=Q("output_k",l[0].dataType,r),y=Q("output_v",l[0].dataType,r),v=N("input",l[0].dataType,l[0].dims),S=N("weight",l[1].dataType,l[1].dims),w=N("bias",l[2].dataType,l[2].dims),b=v.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${f.registerUniforms(k).declareVariables(v,S,w,g,_,y)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},xc=(e,t)=>{let r=Ou(e.inputs,t),[i,n,a]=Du(e,r);return kr(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Mu,Uu,Pu,Sc,ey=M(()=>{"use strict";Ge(),ee(),ie(),ke(),ne(),Mu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((u,l)=>{if(u!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Uu=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?Se(a[a.length-1]):1,u=n==="NHWC"&&a.length>1?s:1,l=B.size(a)/s,p=i,c=p?a.length:a,f=N("x",e[0].dataType,e[0].dims,s),g=N("scale",e[1].dataType,e[1].dims,u),_=N("bias",e[2].dataType,e[2].dims,u),y=N("inputMean",e[3].dataType,e[3].dims,u),v=N("inputVar",e[4].dataType,e[4].dims,u),S=Q("y",e[0].dataType,c,s),w=()=>{let k="";if(i)k=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")k=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let I=1;I<g.rank;I++)k+=`cIndices[${I}] = outputIndices[${I}];`;k+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return k},b=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(f,g,_,y,v,S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${w()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${v.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...Y(a)]:[{type:12,data:l}]})}},Pu=e=>ge(e),Sc=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Pu(Fe(Me({},t),{outputCount:i}));if(be.webgpu.validateInputContent&&Mu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Uu(r,n))}}),Lu,qu,kc,ty=M(()=>{"use strict";ie(),ne(),Lu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},qu=e=>{let t=e[0].dims,r=e[0].dims[2],i=B.size(t)/4,n=e[0].dataType,a=N("input",n,t,4),s=N("bias",n,[r],4),u=N("residual",n,t,4),l=Q("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(a,s,u,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},kc=e=>{Lu(e.inputs),e.compute(qu(e.inputs))}}),Wu,ce,Tc,Ic,Ec,Cc,zc,Ac,Oc,Bc,Rc,Vu,Nc,Dc,Mc,Uc,$r,Pc,Jr,Lc,qc,Wc,Vc,Gc,Hc,Fc,jc,Kc,Zc,Qc,Xc,Yc,Jc,eh,th,rh,rn,ih,Vn,Gn,nh,ah,sh,Gu,Hu,oh,ga=M(()=>{"use strict";ee(),ie(),ke(),ne(),Wu=(e,t,r,i,n,a,s)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let p=N("inputData",r,[u],4),c=Q("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(p,c)}

  ${a!=null?a:""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,a=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:p=>Wu(p,B.size(e.dims),e.dataType,a,r,i,u),getRunData:p=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(p[0].dims)/64/4)},programUniforms:l})}},Tc=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Ic=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},Ec=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},Cc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},zc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Ac=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},Oc=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},Bc=e=>ge(e),Rc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Vu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ge({min:t,max:r})},Nc=(e,t)=>{let r=t||Vu(e.inputs),i=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Dc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Mc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Uc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},$r=e=>ge(e),Pc=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Jr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Lc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Jr(t)))},qc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},Wc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},Vc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Jr(t)))},Gc=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Hc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},Fc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},jc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Kc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Zc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qc=e=>ge(e),Xc=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Yc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},Jc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},eh=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},th=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},rh=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},rn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ih=e=>{e.compute(ce(e.inputs[0],"Tanh",rn))},Vn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${rn("v")};
}
`,Gn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,nh=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Gn,Vn(t),void 0,e.inputs[0].dataType))},ah=(e,t)=>{let r=Ce(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},sh=e=>{e.compute(ce(e.inputs[0],"Log","log"))},Gu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Hu=e=>`quick_gelu_impl(${e})`,oh=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",Hu,Gu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Fu,ju,uh,ry=M(()=>{"use strict";ie(),ne(),ga(),Fu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ju=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),i=N("bias",e[0].dataType,[e[0].dims[2]],4),n=Q("output",e[0].dataType,t,4),a=B.size(t)/4,s=ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,n)}

  ${Jr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},uh=e=>{Fu(e.inputs),e.compute(ju(e.inputs))}}),Ku,Zu,et,lh,dh,ph,ch,hh,fh,mh,gh,yh,_h,iy=M(()=>{"use strict";ee(),ie(),ne(),Ku=(e,t,r,i,n,a,s,u,l,p,c,f)=>{let g,_;typeof u=="string"?g=_=(b,k)=>`${u}((${b}),(${k}))`:typeof u=="function"?g=_=u:(g=u.scalar,_=u.vector);let y=Q("outputData",c,i.length,4),v=N("aData",l,t.length,4),S=N("bData",p,r.length,4),w;if(n)if(a){let b=B.size(t)===1,k=B.size(r)===1,I=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;b||k?w=y.setByOffset("global_idx",_(b?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"),k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):w=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${v.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(s||I?v.getByOffset("offsetA / 4u"):`${v.type.value}(${v.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else w=y.setByOffset("global_idx",_(v.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(k,I,E="")=>{let C=`aData[indexA${I}][componentA${I}]`,A=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${y.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${v.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
            let offsetB${I} = ${S.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${k}[${I}] = ${E}(${g(C,A)});
          `};c===9?w=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:w=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(v,S,y)}

        ${f!=null?f:""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${w}
      }`},Zu=(e,t,r,i,n,a,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),p=!B.areEqual(u,l),c=u,f=B.size(u),g=!1,_=!1,y=[p];if(p){let v=rr.calcShape(u,l,!1);if(!v)throw new Error("Can't perform binary op on the given tensors");c=v.slice(),f=B.size(c);let S=B.size(u)===1,w=B.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;y.push(S),y.push(w),y.push(b),y.push(k);let I=1;for(let E=1;E<c.length;E++){let C=u[u.length-E],A=l[l.length-E];if(C===A)I*=C;else break}I%4===0?(_=!0,g=!0):(S||w||b||k)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map(v=>v.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:v=>Ku(v,u,l,c,g,p,_,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(c)/4)},...Y(u,l,c)]})}},et=(e,t,r,i,n,a)=>{e.compute(Zu(t,n!=null?n:"",e.inputs[0],e.inputs[1],r,i,a))},lh=e=>{et(e,"Add",(t,r)=>`${t}+${r}`)},dh=e=>{et(e,"Div",(t,r)=>`${t}/${r}`)},ph=e=>{et(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},ch=e=>{et(e,"Mul",(t,r)=>`${t}*${r}`)},hh=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;et(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},fh=e=>{et(e,"Sub",(t,r)=>`${t}-${r}`)},mh=e=>{et(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},gh=e=>{et(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},yh=e=>{et(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},_h=e=>{et(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Qu,Xu,wh,bh,ny=M(()=>{"use strict";ee(),ie(),ke(),ne(),Qu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,p)=>{if(p!==t&&l!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Xu=(e,t,r,i,n=0)=>{let a=e.reduce((w,b)=>w+B.size(b.dims),0),s=new Array(e.length),u=new Array(e.length),l=new Array(e.length),p=0,c=n,f=[],g=[],_=[{type:12,data:a}];for(let w=0;w<e.length;++w)s[w]=p,u[w]=c,p+=B.size(e[w].dims),c+=e[w].dims[t],g.push(e[w].dims.length),l[w]=N(`input${w}`,i,g[w]),f.push("rank"),_.push({type:12,data:s[w]}),_.push({type:12,data:u[w]});for(let w=0;w<e.length;++w)_.push(...Y(e[w].dims));_.push(...Y(r));let y=Q("output",i,r.length),v=l.map((w,b)=>{let k=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${b}`};
        var outputIndices = ${w.offsetToIndices("inputOffset")};
        ${y.indicesGet("outputIndices",t)} += uniforms.outputAxisOffset${b};
        ${y.setByIndices("outputIndices",w.getByOffset("inputOffset"))}`;return e.length===1?k:b===0?`if (inputIndex == 0u) {${k}}`:b===e.length-1?`else {${k}}`:`else if (inputIndex == ${b}u) {${k}}`}).join(`
`),S=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)w.registerUniform(`inputOffset${b}`,"u32"),w.registerUniform(`outputAxisOffset${b}`,"u32");return w.declareVariables(...l,y)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${l.slice(1).map((b,k)=>`if (global_idx < uniforms.inputOffset${k+1}) {
      return ${k}u;
    }`).join(`
`)}
    return ${e.length-1}u;
  }

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${v}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:_}),getShaderSource:S}},wh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=B.normalizeAxis(t.axis,i.length);Qu(r,n);let a=i.slice();a[n]=r.reduce((p,c)=>p+(c.dims.length>n?c.dims[n]:0),0);let s=r.filter(p=>B.size(p.dims)>0);if(s.length===0){e.output(0,a);return}let u=e.deviceLimits.maxStorageBuffersPerShaderStage-1,l=0;for(let p=0;p<s.length;p+=u){let c=s.slice(p,p+u);e.compute(Xu(c,n,a,r[0].dataType,l),{inputs:c,outputs:[0]}),l+=c.reduce((f,g)=>f+g.dims[n],0)}},bh=e=>ge({axis:e.axis})}),Ht,Ft,jt,ya,Qt=M(()=>{"use strict";ee(),ie(),Ht=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ft=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},jt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ya=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Hp,Fp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Oe,$h,_a=M(()=>{"use strict";Oe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},$h=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),vh,ay=M(()=>{"use strict";vh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),xr,wa,ba=M(()=>{"use strict";ee(),ie(),ne(),Qt(),xr=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${X(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,X(n,u+a,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},wa=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],p=u[u.length-1],c=s[s.length-1],f=Se(p),g=Se(c),_=Se(l),y=B.size(r)/f/_,v=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),w=[B.size(S),l,p],b=[{type:12,data:y},{type:12,data:l},{type:12,data:p},{type:12,data:c}];Ft(t,b),b.push(...Y(S,s,u)),v&&b.push(...Y(e[2].dims)),b.push(...Y(w));let k=I=>{let E=ha("batch_dims",e[0].dataType,S.length),C=N("a",e[0].dataType,s.length,g),A=N("b",e[1].dataType,u.length,f),x=Q("output",e[0].dataType,w.length,f),D=ze(x.type.tensor),U=Ht(t,x.type.value,D),P=[C,A],G="";if(v){let O=n?f:1;P.push(N("bias",e[2].dataType,e[2].dims.length,O)),G=`${n?`value += bias[col / ${O}];`:`value += ${x.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];jt(t,H);let te=()=>{let O=`var a_data: ${C.type.value};`;for(let W=0;W<g;W++)O+=`
              let b_data${W} = b[(b_offset + (k + ${W}) * uniforms.N + col) / ${f}];`;for(let W=0;W<_;W++){O+=`a_data = a[(a_offset + (row + ${W}) * uniforms.K + k) / ${g}];`;for(let J=0;J<g;J++)O+=`
            values[${W}] = fma(${A.type.value}(a_data${g===1?"":`[${J}]`}), b_data${J}, values[${W}]);
`}return O};return`
  ${I.registerUniforms(H).registerInternalVariables(E).declareVariables(...P,x)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${xr("a_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${xr("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${te()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${G}
      ${U}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${_};${n}`,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:k}}}),Yu,Ju,Hn,nn,el,Fn,tl,ai,$a=M(()=>{"use strict";ee(),ie(),ne(),Qt(),ba(),_a(),Yu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ju=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Hn=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32)=>{let l=t[1]*e[1],p=t[0]*e[0],c=n?l:a,f=n?a:l,g=c/t[0],_=a/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Yu(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ju(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},nn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,el=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Fn=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32,l=!1)=>{let p=e[1]*t[1],c=e[0]*t[0],f=n?p:a,g=n?a:p;if(!(g%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],y=f/t[0],v=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${nn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${v};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${nn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${el(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},tl=(e,t,r,i,n=!1)=>{let[a,s,u,l]=i,p=ze(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Oe(e,p)} {
      var value = ${Oe(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${xr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Oe(e,p)} {
      var value = ${Oe(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${xr("bIndices",u,u.rank-2,a.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Oe(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Oe(e,p)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ai=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),p=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=B.size(c),g=s[s.length-2],_=s[s.length-1],y=u[u.length-1],v=_%4===0&&y%4===0,S=g<=8?[4,1,1]:[4,4,1],w=[8,8,1],b=[Math.ceil(y/w[0]/S[0]),Math.ceil(g/w[1]/S[1]),Math.ceil(f/w[2]/S[2])],k=v?4:1,I=[...l,g,_/k],E=I.length,C=[...p,_,y/k],A=C.length,x=[f,g,y/k],D=[{type:6,data:g},{type:6,data:y},{type:6,data:_}];Ft(t,D),D.push(...Y(c,I,C));let U=["rank","rank"],P=e.length>2;P&&(D.push(...Y(e[2].dims)),U.push("rank")),D.push(...Y(x));let G=H=>{let te=c.length,O=ha("batchDims",e[0].dataType,te,1),W=ze(e[0].dataType),J=N("a",e[0].dataType,E,k),_e=N("b",e[1].dataType,A,k),K=Q("result",e[0].dataType,x.length,k),ue=[J,_e];if(P){let re=n?k:1;ue.push(N("bias",e[2].dataType,e[2].dims.length,re))}let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];jt(t,L);let q=ze(K.type.tensor),j=Ht(t,K.type.value,q),Z=tl(k,P,j,[O,J,_e,K],n);return`
  ${H.registerUniforms(L).registerInternalVariables(O).declareVariables(...ue,K)}
  ${Z}
  ${v?Hn(S,w,W,O):Fn(S,w,W,O)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${v};${n}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:D}),getShaderSource:G}}}),rl,xh,sy=M(()=>{"use strict";ee(),mt(),ne(),Qt(),_a(),ay(),$a(),rl=(e,t,r,i,n=!1,a,s=4,u=4,l=4,p="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",v=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",w=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${w} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${w} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${w} % inChannels;
    var resData = ${Oe(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${v}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,k=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Oe(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Oe(s,p)}(0.0);`,I=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Oe(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Oe(u,p)}(0.0);`,E=Oe(l,p),C=Oe(e?s:u,p),A=Oe(e?u:s,p),x=Ht(a,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?k:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?I:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${$h(n)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},xh=(e,t,r,i,n,a,s,u,l)=>{let p=t.format==="NHWC",c=p?e[0].dims[3]:e[0].dims[1],f=r[0],g=p?r[2]:r[3],_=p?r[1]:r[2],y=p?r[3]:r[1],v=p&&(c%4===0||c%3===0)&&y%4===0,S=p?y:g*_,w=p?g*_:y,b=[8,8,1],k=i<=8?[4,1,1]:[4,4,1],I=[Math.ceil(S/b[0]/k[0]),Math.ceil(w/b[1]/k[1]),Math.ceil(f/b[2]/k[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let E=v?p&&c%4!==0?3:4:1,C=b[1]*k[1],A=b[0]*k[0],x=Math.max(b[0]*E,b[1]),D=i%C===0,U=n%A===0,P=a%x===0,G=v?[E,4,4]:[1,1,1],H=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ft(t,H),H.push(...Y(e[0].dims,e[1].dims));let te=["rank","rank"];s&&(H.push(...Y(e[2].dims)),te.push("rank")),H.push(...Y(r));let O=W=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];jt(t,J);let _e=v?4:1,K=ze(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${v?`vec4<${K}>`:K}) {
        result[flatIndex] = ${v?`vec4<${K}>`:K}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${v?`vec4<${K}>`:K}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${v?"/ 4":""}, value);
      }`,L=N("x",e[0].dataType,e[0].dims.length,E===3?1:E),q=N("w",e[1].dataType,e[1].dims.length,_e),j=[L,q],Z=Q("result",e[0].dataType,r.length,_e);if(s){let re=N("bias",e[2].dataType,e[2].dims.length,_e);j.push(re),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${v?`vec4<${K}>`:K} {
          return bias[coords.${p?"w":"y"}${v?"/ 4":""}];
        }`}return`
        ${vh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${W.registerUniforms(J).declareVariables(...j,Z)}
        ${ue}
        ${rl(p,D,U,P,s,t,G[0],G[1],G[2],K)}
        ${v?Hn(k,b,K,void 0,!p,x):Fn(k,b,K,void 0,!p,x,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${v};${D};${U};${P};${C};${A};${x}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:H}),getShaderSource:O}}}),il,an,cr,nl,sn,al,Sh,kh,oy=M(()=>{"use strict";ee(),mt(),ie(),ne(),Qt(),_a(),il=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},an=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),nl=(e,t,r,i=1)=>{let n=cr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},sn=(e,t,r,i,n)=>{n==null&&(n=nl(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},al=(e,t,r,i,n,a,s,u,l,p)=>{let c,f,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=sn([t,r,i,1],[u,l,p],1,[n,a,s],e);f=y[0],g=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((v,S,w)=>v===w[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=sn([t,r,i,1],[u,l,p],1,[n,a,s],e[0]);f=y[0],g=y[1],_=y[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),g=Math.ceil(r/a),_=Math.ceil(i/s);let y=(f-1)*n+u-t,v=(g-1)*a+l-r,S=(_-1)*s+p-i,w=Math.floor(y/2),b=y-w,k=Math.floor(v/2),I=v-k,E=Math.floor(S/2),C=S-E;c={top:k,bottom:I,left:E,right:C,front:w,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:g,outWidth:_}},Sh=(e,t,r,i,n,a=!1,s="channelsLast")=>{let u,l,p,c,f;if(s==="channelsLast")[u,l,p,c,f]=e;else if(s==="channelsFirst")[u,f,l,p,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,_,y,v]=t,[S,w,b]=an(r),[k,I,E]=an(i),C=cr(_,k),A=cr(y,I),x=cr(v,E),{padInfo:D,outDepth:U,outHeight:P,outWidth:G}=al(n,l,p,c,S,w,b,C,A,x),H=a?g*f:g,te=[0,0,0,0,0];return s==="channelsFirst"?te=[u,H,U,P,G]:s==="channelsLast"&&(te=[u,U,P,G,H]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:p,inWidth:c,inChannels:f,outDepth:U,outHeight:P,outWidth:G,outChannels:H,padInfo:D,strideDepth:S,strideHeight:w,strideWidth:b,filterDepth:_,filterHeight:y,filterWidth:v,effectiveFilterDepth:C,effectiveFilterHeight:A,effectiveFilterWidth:x,dilationDepth:k,dilationHeight:I,dilationWidth:E,inShape:e,outShape:te,filterShape:t}},kh=(e,t,r,i,n,a)=>{let s=a==="channelsLast",u=s?e[0].dims[3]:e[0].dims[1],l=!1,p=[64,1,1],c={x:r.map((b,k)=>k)},f=[Math.ceil(il(c.x.map(b=>r[b]))/p[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let g=l?s&&u%4!==0?3:4:1,_=B.size(r),y=[{type:12,data:_},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Ft(t,y),y.push(...Y(e[0].dims,e[1].dims));let v=["rank","rank"],S=e.length===3;S&&(y.push(...Y(e[2].dims)),v.push("rank")),y.push(...Y(r));let w=b=>{let k=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];jt(t,k);let I=l?4:1,E=ze(e[0].dataType),C=N("x",e[0].dataType,e[0].dims.length,g===3?1:g),A=N("W",e[1].dataType,e[1].dims.length,I),x=[C,A],D=Q("result",e[0].dataType,r.length,I),U="";if(S){let H=N("bias",e[2].dataType,e[2].dims.length,I);x.push(H),U+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${E}>`:E} {
          return bias[${s?X("coords",4,5):X("coords",1,5)}${l?"/ 4":""}];
        }`}let P=Oe(g,E),G=Ht(t,P,E);return`
            ${U}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${E} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${E} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${A.getByIndices("aIndices")};
            }
          ${b.registerUniforms(k).declareVariables(...x,D)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${D.offsetToIndices("global_idx")};
              let batch = ${X("coords",0,C.rank)};
              let d2 = ${s?X("coords",C.rank-1,C.rank):X("coords",1,C.rank)};
              let xFRCCorner = vec3<u32>(${s?X("coords",1,C.rank):X("coords",2,C.rank)},
              ${s?X("coords",2,C.rank):X("coords",3,C.rank)},
              ${s?X("coords",3,C.rank):X("coords",4,C.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?X("uniforms.x_shape",1,C.rank):X("uniforms.x_shape",2,C.rank)};
              let xShapeZ = ${s?X("uniforms.x_shape",2,C.rank):X("uniforms.x_shape",3,C.rank)};
              let xShapeW = ${s?X("uniforms.x_shape",3,C.rank):X("uniforms.x_shape",4,C.rank)};
              let xShapeU = ${s?X("uniforms.x_shape",4,C.rank):X("uniforms.x_shape",1,C.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${E}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<${E}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${E}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${E}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<${E}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${E}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${E}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<${E}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${E}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${E}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = ${E}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${g};${S}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:y}),getShaderSource:w}}}),Th,Ih,uy=M(()=>{"use strict";ee(),ie(),ne(),Qt(),Th=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",p=l?r[3]:r[1],c=p/t.group,f=l&&c>=4?Se(p):1,g=B.size(r)/f,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Ft(t,_),_.push(...Y(s,[u[0],u[1],u[2],u[3]/f]));let y=n?["rank","rank","rank"]:["rank","rank"];_.push(...Y([r[0],r[1],r[2],r[3]/f]));let v=S=>{let w=Q("output",e[0].dataType,r.length,f),b=ze(w.type.tensor),k=Ht(t,w.type.value,b),I=N("x",e[0].dataType,s.length),E=N("w",e[1].dataType,u.length,f),C=[I,E];n&&C.push(N("b",e[2].dataType,e[2].dims,f));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];jt(t,A);let x=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...C,w)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${w.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${w.type.value} = ${w.type.value}(0);
    ${x}
    ${a}
    ${k}
    ${w.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:v}},Ih=(e,t,r,i)=>{let n=e.length>2,a=Se(r[3]),s=Se(r[2]),u=B.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ft(t,f),f.push(...Y(l,p,c));let g=(s-1)*t.strides[1]+p[1],_=y=>{let v=Q("output",e[0].dataType,c.length,a),S=ze(v.type.tensor),w=Ht(t,v.type.value,S),b=N("x",e[0].dataType,l.length,a),k=N("w",e[1].dataType,p.length,a),I=[b,k];n&&I.push(N("b",e[2].dataType,e[2].dims,a));let E=n?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return jt(t,C),`
  ${y.registerUniforms(C).declareVariables(...I,v)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${g}>;
    var values: array<${v.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${w}
      ${v.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${g};${p[0]};${p[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:_}}}),sl,Hr,ol,Fr,jn,on,ul,ll,Kn,ly=M(()=>{"use strict";ie(),sy(),oy(),$a(),uy(),Qt(),ba(),St(),sl=(e,t,r,i,n,a)=>{let s=e[0],u=e.slice(a?1:2,a?3:4),l=u.length,p=t[0],c=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),f=u.map((g,_)=>g+i[_]+i[_+l]).map((g,_)=>Math.floor((g-c[_]+n[_])/n[_]));return f.splice(0,0,s),f.splice(a?3:1,0,p),f},Hr=[2,3,1,0],ol=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();ii.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},jn=e=>{let t=ya(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,p=e.w_is_const();return Fe(Me({autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:u,strides:l,wIsConst:p},t),{cacheKey:`${e.format};${t.activation};`})},on=(e,t,r,i)=>{var C,A,x;let n=r.format==="NHWC",a=sl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let D=[t[0]];if(n){let U=(C=e.kernelCustomData.wT)!=null?C:e.compute(Ve(t[1],Hr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),D.push(U)}else D.push(t[1]);t.length===3&&D.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Ih(D,r,a,i),{inputs:D}):e.compute(Th(D,r,a,i),{inputs:D});return}let s=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],p=t[0].dims[n?3:1],c=t[1].dims[2],f=t[1].dims[3],g=a[n?1:2],_=a[n?2:3],y=a[n?3:1],v=n&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(v||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let D=a[0],U,P,G,H=[];if(n){let W=(A=e.kernelCustomData.wT)!=null?A:e.compute(Ve(t[1],Hr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W),v){let J=u*l*p;U=t[0].reshape([1,D,J]),P=W.reshape([1,J,y]),G=[1,D,y]}else U=t[0].reshape([D,u*l,p]),P=W.reshape([1,p,y]),G=[D,g*_,y];H.push(U),H.push(P)}else U=t[0].reshape([D,p,u*l]),P=t[1].reshape([1,y,p]),G=[D,y,g*_],H.push(P),H.push(U);s&&H.push(t[2]);let te=G[2],O=H[0].dims[H[0].dims.length-1];te<8&&O<8?e.compute(wa(H,r,a,G,n,i),{inputs:H}):e.compute(ai(H,r,a,G,n,i),{inputs:H});return}let S=!0,w=(x=e.kernelCustomData.wT)!=null?x:e.compute(Ve(t[1],Hr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=w);let b=[t[0],w];s&&b.push(t[2]);let k=n?g*_:y,I=n?y:g*_,E=c*f*p;e.compute(xh(b,r,a,k,I,E,s,S,i),{inputs:b})},ul=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Fr(Fe(Me({},t),{pads:n,strides:a,dilations:s,kernelShape:u}),i);on(e,i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},ll=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Fr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Sh(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(kh(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Kn=(e,t)=>{if(ol(e.inputs,t),e.inputs[0].dims.length===3)ul(e,t);else if(e.inputs[0].dims.length===5)ll(e,e.inputs,t);else{let r=Fr(t,e.inputs);on(e,e.inputs,r)}}}),Eh,dy=M(()=>{"use strict";ee(),mt(),ie(),ne(),Eh=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,p=u[3],c=a?Se(l):1,f=a&&p===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/c)*c,_=l-g,y=a?Se(p):1,v=a?p===1?c:y:1,S=B.size(n)/y,w=[Math.ceil(S/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let b=["rank","rank"],k=[t.strides[0],t.strides[1]],I=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],C=[I[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),I[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],A=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:S},{type:12,data:k},{type:12,data:I},{type:12,data:E},{type:12,data:C},{type:6,data:A},{type:12,data:g},{type:12,data:l},{type:12,data:p},...Y(e[0].dims,e[1].dims)];i&&(x.push(...Y(e[2].dims)),b.push("rank")),x.push(...Y(n));let D=U=>{let P=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:k.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=ze(e[0].dataType),H=a?1:2,te=a?2:3,O=a?3:1,W=N("W",e[1].dataType,e[1].dims.length,v),J=N("Dy",e[0].dataType,e[0].dims.length,c),_e=[J,W];i&&_e.push(N("bias",e[2].dataType,[n[O]].length,y));let K=Q("result",e[0].dataType,n.length,y),ue=()=>{let j="";if(f)c===4?j+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${W.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?j+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${G}>(${W.getByOffset("w_offset")}, ${W.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(j+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${G}>(${W.getByOffset("w_offset")}, ${W.getByOffset("w_offset + 1u")}, ${W.getByOffset("w_offset + 2u")}, ${W.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(j+=`
                  let xValue = ${a?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):J.get("batch","inputChannel","idyR","idyC")};
        `,c===1)j+=`
          let w_offset = ${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${W.getByOffset(`w_offset / ${v}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Z=0;Z<c;Z++)j+=`
            let wValue${Z} = ${W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Z}, wOutChannel)`)} / ${v}`)};
            dotProd = dotProd + xValue[${Z}] * wValue${Z};`;return j},L=()=>{if(_===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let j="";if(c===1){j+="dotProd = dotProd";for(let Z=0;Z<_;Z++)j+=`
            + ${J.getByOffset(`x_offset + ${Z}`)} * ${W.getByOffset(`w_offset + ${Z}`)}`;j+=";"}else if(c===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);j+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${W.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return j},q=`
            let outputIndices = ${K.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${K.indicesGet("outputIndices",0)};
            let d1 = ${K.indicesGet("outputIndices",O)};
            let r = ${K.indicesGet("outputIndices",H)};
            let c = ${K.indicesGet("outputIndices",te)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${K.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${te}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${W.indicesToOffset(`${W.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${v};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ue()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${L()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${K.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(P).declareVariables(..._e,K)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${v}${y}${f}${_}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:D}}}),dl,pl,cl,un,Ch,hl,ln,fl,zh,py=M(()=>{"use strict";dy(),Qt(),St(),dl=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,pl=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},cl=(e,t,r,i,n,a,s,u,l,p)=>{let c=e.length-2,f=p.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],_=t[u?3:1]*n;for(let y=0,v=e.length-c-(u?1:0);y<c;++y,++v){let S=e[v],w=f?S*s[y]:p[y],b=dl(S,s[y],a[y],t[v],r[y],w);pl(b,i,a,y,y+c),f&&p.push(s[y]*(S-1)+l[y]+(t[v]-1)*r[y]+1-a[y]-a[y+c])}p.splice(0,0,g),p.splice(u?3:1,0,_)},un=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let p=e.strides.slice();if(p.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;p=new Array(f).fill(1)}cl(u,r,l,e.autoPad,e.group,n,p,i,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:p}),c},Ch=e=>{var g;let t=ya(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=(g=e.group)!=null?g:1,s=e.kernelShape,u=e.pads,l=e.strides,p=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return Fe(Me({autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:p},t),{cacheKey:`${e.format};${t.activation};`})},hl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ln=(e,t,r,i)=>{var s;let n=(s=e.kernelCustomData.wT)!=null?s:e.compute(Ve(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(Eh(a,r,i),{inputs:a})},fl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let p=un(Fe(Me({},t),{pads:u,strides:s,dilations:a,kernelShape:n,outputPadding:l}),i);ln(e,i,p,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},zh=(e,t)=>{if(hl(e.inputs,t),e.inputs[0].dims.length===3)fl(e,t);else{let r=un(t,e.inputs);ln(e,e.inputs,r)}}}),ml,Ah,Oh,cy=M(()=>{"use strict";ee(),ie(),ke(),ne(),ml=(e,t,r,i)=>{let n=B.size(t),a=t.length,s=N("input",e,a),u=Q("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=B.normalizeAxis(l,a),c=f=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=X("uniforms.input_shape","uniforms.axis",a),y=i.reverse?g+(i.exclusive?" + 1":""):"0",v=i.reverse?_:g+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${v};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:p},...Y(t,t)]}),getShaderSource:c}},Ah=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(ml(i,r,n,t),{inputs:[0]})},Oh=e=>{let t=e.exclusive===1,r=e.reverse===1;return ge({exclusive:t,reverse:r})}}),gl,yl,_l,Bh,Rh,hy=M(()=>{"use strict";ee(),ie(),ke(),ne(),gl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},yl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},_l=(e,t)=>{let r,i,n,a,s,u,l=t.format==="NHWC",p=t.blocksize,c=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=c?[r,i,n,p,p,a/p**2]:[r,i,n,a/p**2,p,p],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,p,p,a/p**2,i,n]:[r,a/p**2,p,p,i,n],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),g=f.dims.length,_=e.dataType,y=N("a",_,g),v=Q("output",_,g),S=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(y,v)}

  ${yl(u,g,y,v)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:w=>{let b=l?[r,i*p,n*p,a/p**2]:[r,a/p**2,i*p,n*p],k=B.size(b),I=f.dims,E=B.sortBasedOnPerm(I,u);return{outputs:[{dims:b,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...Y(I,E)]}},getShaderSource:S}},Bh=(e,t)=>{gl(e.inputs),e.compute(_l(e.inputs[0],t))},Rh=e=>ge({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ct,hr,jr,dn,bt,wl,bl,$l,pn,cn,hn,vl,xl,fn,Sl,Nh,Dh,fy=M(()=>{"use strict";ee(),ie(),ke(),ne(),ct=256,hr=512,jr=2*Math.PI,dn=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},bt=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},wl=(e,t,r,i,n)=>{let a=r/e,s=hr-i,u=p=>`smem[${s}u + base + ${p*t}u]`,l=`  for (var t = local_idx; t < ${a}u; t += ${ct}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let p=0;p<e;p++){let c=`${i}u + t + ${p*a}u`;if(p===0)l+=`    leg[0] = smem[${c}];
`;else{let f=n*jr*p/(e*t);l+=`    { let a = ${bt(f)} * angleUnit; leg[${p}] = cmul(smem[${c}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${u(0)} = leg[0] + leg[1];
    ${u(1)} = leg[0] - leg[1];
`;else if(e===4){let p=n<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${p};
`,l+=`    ${u(0)} = evenSum + oddSum;
    ${u(1)} = evenDiff + oddRot;
`,l+=`    ${u(2)} = evenSum - oddSum;
    ${u(3)} = evenDiff - oddRot;
`}else for(let p=0;p<e;p++){let c=["leg[0]"];for(let f=1;f<e;f++){let g=n*jr*(f*p)/e,_=bt(Math.cos(g)),y=bt(Math.sin(g));c.push(`vec2<f32>(leg[${f}].x*${_} - leg[${f}].y*${y}, leg[${f}].x*${y} + leg[${f}].y*${_})`)}l+=`    ${u(p)} = ${c.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},bl=(e,t,r)=>{let i="",n=1,a=0;for(let s of e)i+=wl(s,n,t,a,r),n*=s,a=hr-a;return{code:i,resultOffset:a}},$l=(e,t,r,i,n)=>{let a=e.dims,s=a.length,u=a[s-1],l=a[t],p=r&&i?(l-1)*2:l;n!==void 0&&(p=n);let c=r&&i?1:2,f=i&&!r?Math.floor(p/2)+1:p,g=a.slice();g[t]=f,g[s-1]=c;let _=1;for(let v=t+1;v<s-1;v++)_*=a[v];let y=B.size(a)/u/l;return{dataType:e.dataType,outputDims:g,length:p,signalLength:l,inner:_,batch:y,inputComponents:u,outputComponents:c,outputLength:f,inverse:r,onesided:i}},pn=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),cn=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],hn=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),vl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,u=Ce(t),l=a?1:-1,p=a?1/r:1,c=dn(r),f=g=>{let _=N("x",t,[1]),y=Q("y",t,[1]),v=E=>{let C=`inBase + (${E}) * uniforms.inner * ${i}u`,A=`f32(${_.getByOffset(C)})`,x=i===2?`f32(${_.getByOffset(`${C} + 1u`)})`:"0.0";return`vec2<f32>(${A}, ${x})`},S;if(a&&s){let E=Math.floor(r/2)+1,C=r%2===0?`select(provided, provided - 1u, provided == ${E}u)`:"provided";S=`
    let provided = min(uniforms.signalLength, ${E}u);
    for (var i = local_idx; i < ${r}u; i += ${ct}u) {
      if (i < provided) { smem[i] = ${v("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${C}; k += ${ct}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else S=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${ct}u) {
      if (i < loadCount) { smem[i] = ${v("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:w,resultOffset:b}=bl(c,r,l),k=p===1?`smem[${b}u + i]`:`smem[${b}u + i] * ${bt(p)}`,I=n===2?y.setByOffset("off + 1u",`${u}(v.y)`):"";return`
  ${hn(g,_,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*hr}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(ct)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    ${S}
${w}    for (var i = local_idx; i < uniforms.outputLength; i += ${ct}u) {
      let v = ${k};
      let off = outBase + i * uniforms.inner * ${n}u;
      ${y.setByOffset("off",`${u}(v.x)`)}
      ${I}
    }
  }`};return{name:"DFT",shaderCache:{hint:pn(e,"fft"),inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:cn(e),dispatchGroup:{x:e.batch}})}},xl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,u=Ce(t),l=a?1:-1,p=a?1/r:1,c=f=>{let g=N("x",t,[1]),_=Q("y",t,[1]),y=k=>{let I=`inBase + (${k}) * uniforms.inner * ${i}u`,E=`f32(${g.getByOffset(I)})`,C=i===2?`f32(${g.getByOffset(`${I} + 1u`)})`:"0.0";return`vec2<f32>(${E}, ${C})`},v=a&&s?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,S=`
      let angle = ${bt(l*jr)} * f32(knMod) / ${bt(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,w=n===2?_.setByOffset("off + 1u",`${u}(v.y)`):"",b=p===1?"acc":`acc * ${bt(p)}`;return`
  ${hn(f,g,_)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${v}
  ${f.mainStart(ct)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${ct}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${S}
      }
      let v = ${b};
      let off = outBase + k * uniforms.inner * ${n}u;
      ${_.setByOffset("off",`${u}(v.x)`)}
      ${w}
    }
  }`};return{name:"DFT",shaderCache:{hint:pn(e,"direct"),inputDependencies:["type"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:cn(e),dispatchGroup:{x:e.batch}})}},fn=e=>{if(!e||e.dataType===0)return;if(B.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Sl=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Nh=(e,t)=>{var c;Sl(e.inputs);let r=e.inputs[0],i=r.dims.length,n=t.inverse!==0,a=t.onesided!==0,s=fn(e.inputs[1]);if(s!==void 0&&s<=0)throw new Error("dft_length must be greater than zero.");let u=B.normalizeAxis((c=fn(e.inputs[2]))!=null?c:t.axis,i);if(u===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(n&&a&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=$l(r,u,n,a,s);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let p=l.length<=hr&&dn(l.length)!==void 0?vl(l):xl(l);e.compute(p,{inputs:[0]})},Dh=e=>{var t,r,i;return ge({axis:(t=e.axis)!=null?t:1,inverse:(r=e.inverse)!=null?r:0,onesided:(i=e.onesided)!=null?i:0})}}),Kr,fr,mn,kl,Tl,Il,El,gn,Cl,Mh,Uh,my=M(()=>{"use strict";ee(),ie(),ke(),ne(),Kr="[a-zA-Z]|\\.\\.\\.",fr="("+Kr+")+",mn="^"+fr+"$",kl="("+fr+",)*"+fr,Tl="^"+kl+"$",Il=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},El=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Tl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let u=e[s].dims.slice();if(!a.match(RegExp(mn)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,u,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(fr)))throw new Error("Invalid RHS");(n=i.match(RegExp(Kr,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],u=0;if(!e.match(RegExp(mn))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Kr,"g")),p=new Il(i);return l==null||l.forEach((c,f)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let g=n-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let y=String.fromCharCode(48+_);p.addSymbol(y,f+_),this.addSymbol(y,r[u++],i)}}else p.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),p}},gn=e=>e+"_max",Cl=(e,t,r,i)=>{let n=e.map(p=>p.length).map((p,c)=>N(`input${c}`,t,p)),a=B.size(i),s=Q("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let c=[],f="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",y=[],v=[],S=[],w=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((I,E)=>{var C;if(r.rhs.symbolToIndices.has(E)){let A=(C=r.rhs.symbolToIndices.get(E))==null?void 0:C[0];A!==void 0&&r.lhs.forEach((x,D)=>{if(I.inputIndices.includes(D)){let U=x.symbolToIndices.get(E);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(P=>{c.push(`${n[D].indicesSet(`input${D}Indices`,P,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,x)=>{if(I.inputIndices.includes(x)){let D=A.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(U=>{y.push(`${n[x].indicesSet(`input${x}Indices`,U,`${E}`)}`)}),w.push(`prod *= ${n[x].getByIndices(`input${x}Indices`)};`)}}),v.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${gn(E)}; ${E}++) {`),S.push("}")});let k=b?[...c,`let sum = ${n.map((I,E)=>I.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,g,...v,...y,f,...w,_,...S];return`
            ${p.registerUniforms(u.map(I=>({name:`${gn(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((I,E)=>`var input${E}Indices: ${n[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=u.filter(f=>r.symbolToInfo.has(f)).map(f=>{var g;return{type:12,data:((g=r.symbolToInfo.get(f))==null?void 0:g.dimValue)||0}});p.push({type:12,data:a});let c=e.map((f,g)=>[...Y(f)]).reduce((f,g)=>f.concat(g),p);return c.push(...Y(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:l}},Mh=(e,t)=>{let r=new El(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(Cl(n,e.inputs[0].dataType,r,i))},Uh=e=>{let t=e.equation.replace(/\s+/g,"");return ge({equation:t})}}),zl,yn,Al,Ol,Ph,gy=M(()=>{"use strict";ee(),ie(),ne(),zl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},yn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Al=(e,t)=>e.length>t.length?yn(e,t):yn(t,e),Ol=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Al(t,r),n=e[0].dataType,a=n===9||B.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(B.size(i)/u),p=f=>{let g=N("input",n,t.length,s),_=Q("output",n,i.length,u),y;if(n===9){let v=(S,w,b="")=>`
          let outputIndices${w} = ${_.offsetToIndices(`outputOffset + ${w}u`)};
          let offset${w} = ${g.broadcastedIndicesToOffset(`outputIndices${w}`,_)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${S}[${w}] = ${b}(${g.getByOffset(`index${w}`)}[component${w}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${v("data",0,"u32")}
        ${v("data",1,"u32")}
        ${v("data",2,"u32")}
        ${v("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:l},...Y(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Ph=e=>{zl(e.inputs),e.compute(Ol(e.inputs),{inputs:[0]})}}),Bl,Lh,yy=M(()=>{"use strict";ee(),ie(),ne(),ga(),Bl=e=>{let t=e[0].dataType,r=B.size(e[0].dims),i=B.size(e[1].dims),n=i%4===0,a=s=>{let u=N("x",t,[1],4),l=N("bias",t,[1],4),p=Q("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,p)}

    ${Vn(Ce(t))}

    ${s.mainStart(ir)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Gn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/ir/4)}})}},Lh=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?nh(e):e.compute(Bl(e.inputs))}}),Rl,Nl,qh,Wh,_y=M(()=>{"use strict";ee(),ie(),ke(),ne(),Rl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Nl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=B.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let u=r[a],l=e[0].dataType===9?4:1,p=Math.ceil(B.size(s)/l),c=[{type:12,data:p},{type:6,data:u},{type:12,data:a},...Y(e[0].dims,e[1].dims,s)],f=g=>{let _=N("data",e[0].dataType,e[0].dims.length,l),y=N("inputIndices",e[1].dataType,e[1].dims.length),v=Q("output",e[0].dataType,s.length,l),S=b=>{let k=i.length,I=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let E=0;E<k;E++)I+=`${k>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;I+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let E=0,C=0;E<n;E++)E===a?(I+=`${n>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,C+=k):(I+=`${n>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${C}]`:`outputIndices${b}`};`,C++);return I},w;if(e[0].dataType===9){let b=(k,I,E="")=>`
          let outputIndices${I} = ${v.offsetToIndices(`outputOffset + ${I}u`)};
          ${S(I)};
          let offset${I} = ${_.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${k}[${I}] = ${E}(${_.getByOffset(`index${I}`)}[component${I}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${v.setByOffset("global_idx","value")}
      `}else w=`
      let outputIndices = ${v.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${v.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,v)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${w}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:f}},qh=e=>ge({axis:e.axis}),Wh=(e,t)=>{let r=e.inputs;Rl(r),e.compute(Nl(e.inputs,t))}}),Dl,Vh,Gh,wy=M(()=>{"use strict";ee(),ie(),ne(),Dl=(e,t,r,i,n,a,s,u,l)=>{let p=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[a];p.push(...Y(t.dims,c));let f=g=>{let _=N("indices_data",t.dataType,t.dims.length),y=Q("input_slice_offsets_data",12,1,1),v=[_,y],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...v)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Vh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],u=B.sizeToDimension(a,a.length-1),l=B.sizeFromDimension(i,t.batchDims+s),p=B.sizeToDimension(i,t.batchDims),c=B.sizeFromDimension(i,t.batchDims),f=u/p,g=new Array(s),_=l;for(let I=0;I<s;++I)g[s-1-I]=_,_*=i[t.batchDims+s-1-I];let y=Dl(e,r[1],g,t.batchDims,i,u,f,c,s),v=t.batchDims+s;if(v>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice(v)),w=B.size(S),b=[{type:12,data:w},{type:12,data:l},...Y(r[0].dims,y.dims,S)],k=I=>{let E=N("data",r[0].dataType,r[0].dims.length),C=N("slice_offsets",12,y.dims.length),A=Q("output",r[0].dataType,S.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,C,A)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:b}),getShaderSource:k},{inputs:[r[0],y]})},Gh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Ml,Ul,Hh,Fh,by=M(()=>{"use strict";ee(),ie(),ke(),ne(),Ml=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/i)===a.dims[l]:u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((u,l)=>u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ul=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=B.normalizeAxis(t.gatherAxis,n),s=B.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(a,1,...i);let l=B.size(u),p=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...Y(...e.map((_,y)=>_.dims),u)],g=_=>{let y=N("data",e[0].dataType,e[0].dims.length),v=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),w=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=Q("output",p,u.length),k=[y,v,S];w&&k.push(w);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(I).declareVariables(...k,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${v.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${v.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${v.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${w?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${w.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${w.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ce(p)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},Hh=(e,t)=>{let r=e.inputs;Ml(r,t),e.compute(Ul(e.inputs,t))},Fh=e=>ge({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Pl,Ll,jh,Kh,$y=M(()=>{"use strict";ee(),ie(),ke(),ne(),Pl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ll=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,u=B.normalizeAxis(t.axis,n),l=r[u],p=a.slice(0),c=B.size(p),f=N("input",i,n),g=N("indicesInput",s,a.length),_=Q("output",i,p.length),y=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return y.push(...Y(r,a,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:v=>`
      ${v.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,_)}
      ${v.mainStart()}
      ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},jh=e=>ge({axis:e.axis}),Kh=(e,t)=>{let r=e.inputs;Pl(r),e.compute(Ll(e.inputs,t))}}),ql,Wl,Zh,Qh,vy=M(()=>{"use strict";ee(),ie(),ne(),ql=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Wl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Gp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[n,a];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,p=Math.ceil(a/l),c=Math.ceil(n/l),f=!0,g=B.size(u),_=[{type:12,data:f?p:g},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...Y(e[2].dims)),y.push("rank")),_.push(...Y(u));let v=w=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",I=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),C=I.type.value,A=null,x=[I,E];e.length===3&&(A=N("c",e[2].dataType,e[2].dims.length),x.push(A));let D=Q("output",e[0].dataType,u.length);x.push(D);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${w.registerUniforms(U).declareVariables(...x)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${k}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${C}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=w=>{let b=N("a",e[0].dataType,e[0].dims),k=N("b",e[1].dataType,e[1].dims),I=null,E=[b,k];e.length===3&&(I=N("c",e[2].dataType,e[2].dims.length),E.push(I));let C=Q("output",e[0].dataType,u.length);E.push(C);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${w.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${w.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:p*c},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:v}},Zh=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Qh=(e,t)=>{ql(e.inputs),e.compute(Wl(e.inputs,t))}}),ot,ht,Nt,Dt,Vl,Gl,Hl,Fl,jl,Kl,Zl,Ql,Xh,Yh,xy=M(()=>{"use strict";ee(),ie(),ke(),ne(),[ot,ht,Nt,Dt]=[0,1,2,3],Vl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Gl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Hl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Fl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,jl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Kl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ot}] = batch;
     indices[${ht}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Nt}] = u32(r);
            indices[${Dt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Nt}] = u32(clamp(r, 0, H - 1));
          indices[${Dt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Nt}] = gs_reflect(r, border[1], border[3]);
          indices[${Dt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Zl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ot}], indices[${ht}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ot}], indices[${ht}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ot}], indices[${ht}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ot}], indices[${ht}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ot}], indices[${ht}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ot}], indices[${ht}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ql=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=N("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ot,ht,Nt,Dt]=[0,3,1,2]);let s=Q("output",e[0].dataType,a.length),u=r.type.value,l=B.size(a),p=[{type:12,data:l},...Y(e[0].dims,i,a)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Gl}
  ${Hl(u)}
  ${Fl(t)}
  ${jl(t)}
  ${Kl(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Nt}]);
      let W_in = i32(uniforms.x_shape[${Dt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ot}], indices[${Nt}], indices[${Dt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Zl(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=B.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:p}},getShaderSource:c}},Xh=(e,t)=>{Vl(e.inputs),e.compute(Ql(e.inputs,t))},Yh=e=>ge({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),De,Xl,Jh,_n,Yl,vr,ef,tf=M(()=>{"use strict";ee(),ie(),ke(),ca(),ma(),ne(),St(),De=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Xl=(e,t)=>{let r=e[0],i=De(e,1),n=De(e,2),a=De(e,3),s=De(e,4),u=De(e,5),l=De(e,6),p=De(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=f,y=0,v=0,S=Math.floor(g/t.numHeads);if(l&&p&&B.size(l.dims)&&B.size(p.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==t.numHeads||p.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],v=l.dims[2]}else if(l&&B.size(l.dims)||p&&B.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w;if(i&&B.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');w=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');w=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+_,k=0;if(s&&B.size(s.dims)>0){k=8;let A=s.dims;throw A.length===1?A[0]===c?k=1:A[0]===3*c+2&&(k=3):A.length===2&&A[0]===c&&A[1]===b&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,E=g;if(n&&B.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(_!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=n.dims[2]}else{if(_!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=n.dims[1]*n.dims[3],I=!0}}let C=!1;if(s&&B.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&B.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:v,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:C,passPastInKv:I,qkvFormat:w}},Jh=e=>ge(Me({},e)),_n=ge({perm:[0,2,1,3]}),Yl=(e,t,r,i,n,a,s)=>{let u=[i,n,a],l=B.size(u),p=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],c=f=>{let g=Q("qkv_with_bias",t.dataType,u),_=N("qkv",t.dataType,u),y=N("bias",r.dataType,u),v=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(v).declareVariables(_,y,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},vr=(e,t,r,i,n,a,s,u)=>{let l=a;if(s&&B.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Yl(e,a,s,t,i,r*n,u),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Ve(l,_n.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Ve(l,_n.perm),{inputs:[l],outputs:[-1]})[0]},ef=(e,t)=>{let r=Xl(e.inputs,t),i=e.inputs[0],n=De(e.inputs,1),a=De(e.inputs,2),s=De(e.inputs,3),u=De(e.inputs,4),l=De(e.inputs,5),p=De(e.inputs,6),c=De(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let f=n&&a&&n.dims.length===4&&a.dims.length===4,g=vr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return kr(e,g,n,a,u,void 0,p,c,l,r);if(!n||!a)throw new Error("key and value must be provided");let _=vr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=vr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);kr(e,g,_,y,u,void 0,p,c,l,r)}}),Jl,ed,td,rd,Zn,rf,nf,af=M(()=>{"use strict";ee(),ie(),ke(),ne(),Jl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},ed=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),ge({numOutputs:i,axis:t.axis,splitSizes:r})},td=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,rd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Zn=(e,t)=>{let r=e[0].dims,i=B.size(r),n=e[0].dataType,a=B.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=N("input",n,r.length),l=new Array(t.numOutputs),p=[],c=[],f=0,g=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){f+=t.splitSizes[y],l[y]=f;let v=r.slice();v[a]=t.splitSizes[y],c.push(v),s[y]=Q(`output${y}`,n,v.length),p.push({dims:c[y],dataType:e[0].dataType})}g.push({type:12,data:l},...Y(r,...c));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${td(l.length)}
  ${rd(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},rf=(e,t)=>{Jl(e.inputs);let r=e.inputs.length===1?t:ed(e.inputs,t);e.compute(Zn(e.inputs,r),{inputs:[0]})},nf=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ge({axis:t,numOutputs:i,splitSizes:r})}}),id,si,sf,of=M(()=>{"use strict";ee(),ie(),ke(),ne(),id=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!B.areEqual(i.dims,[])&&!B.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],c=n.dims[0],f=B.sizeFromDimension(r.dims,1)/p,g=u===0?n.dims[1]*2:f/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(p>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},si=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],u=B.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=u/l,c=e[2].dims[1],f=n===0?c*2:p/i,g=new Array(s,l,p/f,f-c),_=B.computeStrides(g),y=[{type:1,data:a},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[u,p,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],v=S=>{let w=N("input",e[0].dataType,e[0].dims.length),b=N("position_ids",e[1].dataType,e[1].dims.length),k=N("cos_cache",e[2].dataType,e[2].dims.length),I=N("sin_cache",e[3].dataType,e[3].dims.length),E=Q("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(w,b,k,I,E)}

        ${S.mainStart(ir)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",Q("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${w.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${w.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${w.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${w.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",w.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ge({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(g)/ir)},programUniforms:y})}},sf=(e,t)=>{id(e.inputs,t),e.compute(si(e.inputs,t))}}),nd,ad,wn,sd,uf,Sy=M(()=>{"use strict";ke(),ee(),ma(),tf(),af(),St(),of(),ne(),nd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],p=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=p,g=0,_=!i||i.dims.length===0,y=Math.floor(_?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);_&&(c=y*t.numHeads);let v=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(v&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(v&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=a.dims[2]}else if(v||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}let b=0,k=!1,I=t.kvNumHeads?y*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=E.dims.reduce((A,x)=>A*x,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:I,headSize:y,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:w}},ad=ge({perm:[0,2,1,3]}),wn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Ve(i,ad.perm),{inputs:[i],outputs:[-1]})[0]),i},sd=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],p=c=>{let f=N("seq_lens",r.dataType,r.dims),g=N("total_seq_lens",i.dataType,i.dims),_=Q("pos_ids",n,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,g,_)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p}},uf=(e,t)=>{var I;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=nd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((I=e.inputs[1])==null?void 0:I.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ge({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,_,y]=!n&&!a?e.compute(Zn([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],v,S;if(t.doRotary){let E=e.compute(sd(r.batchSize,r.sequenceLength,l,p),{inputs:[l,p],outputs:[-1]})[0],C=e.inputs[7],A=e.inputs[8],x=ge({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),D=[g,E,C,A],U=[-1];v=e.compute(si(D,x),{inputs:D,outputs:U})[0],D.splice(0,1,_);let P=ge({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(si(D,P),{inputs:D,outputs:U})[0]}let w=vr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?v:g,void 0,0),b=wn(e,t.doRotary?S:_,r),k=wn(e,y,r);kr(e,w,b,k,void 0,void 0,s,u,void 0,r,l,p)}}),bn,od,ud,lf,ky=M(()=>{"use strict";ee(),ie(),St(),ne(),bn=(e,t,r,i,n,a,s,u)=>{let l=Se(a),p=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=n*s,g=64;f===1&&(g=256);let _=[n,s,a/l],y=[n,s,2],v=["rank","type","type"],S=[];S.push(...Y(_,y));let w=b=>{let k=N("x",t.dataType,3,l),I=N("scale",r.dataType,r.dims),E=N("bias",i.dataType,i.dims),C=Q("output",1,3,2),A=[k,I,E,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${b.declareVariables(...A)}
  ${b.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${xt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${xt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:w},{inputs:[t,r,i],outputs:[-1]})[0]},od=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],u=i[1],l=B.sizeFromDimension(i,a),p=Se(l),c=B.size(n)/p,f=bn(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/p],_=[s,u],y=["type","none"],v=S=>{let w=N("x",t[0].dataType,g.length,p),b=N("scale_shift",1,_.length,2),k=Q("output",t[0].dataType,g.length,p),I=[w,b,k];return`
  ${S.registerUniform("output_size","u32").declareVariables(...I)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${w.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...Y(g,_,g)]}),getShaderSource:v},{inputs:[t[0],f]})},ud=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],u=B.sizeFromDimension(i,1)/s,l=Se(s),p=B.size(n)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],g=!1,_=[0,i.length-1];for(let w=0;w<i.length-2;w++)g=g||i[w+1]!==1,_.push(w+1);g=g&&i[i.length-1]!==1;let y=g?e.compute(Ve(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(w,b)=>i[_[b]])),v=bn(e,y,t[1],t[2],a,u,s,r.epsilon),S=w=>{let b=ze(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,I=A=>{let x=A===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${D}(scale.${x}))`;case 2:return`vec2<${b}>(${D}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${b}>(${D}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=N("input",t[0].dataType,t[0].dims,l),C=Q("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${w.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],v]})},lf=(e,t)=>{t.format==="NHWC"?ud(e,e.inputs,t):od(e,e.inputs,t)}}),ld,dd,df,Ty=M(()=>{"use strict";ee(),ie(),ne(),ld=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},dd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],u=n,l=B.normalizeAxis(t.axis,n.length),p=B.sizeToDimension(n,l),c=B.sizeFromDimension(n,l),f=B.size(a.dims),g=s?B.size(s.dims):0;if(f!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let _=[];for(let E=0;E<n.length;++E)E<l?_.push(n[E]):_.push(1);let y=Se(c),v=["type","type"],S=[{type:12,data:p},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&v.push("type");let w=r>1,b=r>2,k=E=>{let C=ze(e[0].dataType),A=[N("x",e[0].dataType,e[0].dims,y),N("scale",a.dataType,a.dims,y)];s&&A.push(N("bias",s.dataType,s.dims,y)),A.push(Q("output",e[0].dataType,u,y)),w&&A.push(Q("mean_data_output",1,_)),b&&A.push(Q("inv_std_output",1,_));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(x).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ln("f32",y)};
    var mean_square_vector = ${Ln("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${tr(C,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xt("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xt("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${tr(C,y,"x[j + offset]")};
      let f32scale = ${tr(C,y,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${tr(C,y,"bias[j]")}`:""}
      );
    }

    ${w?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:u,dataType:e[0].dataType}];return w&&I.push({dims:_,dataType:1}),b&&I.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:v},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:S}),getShaderSource:k}},df=(e,t)=>{ld(e.inputs),e.compute(dd(e.inputs,t,e.outputCount))}}),pd,pf,Iy=M(()=>{"use strict";ie(),ba(),$a(),pd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},pf=e=>{pd(e.inputs);let t=rr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(wa(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),s=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let u=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),p=[1,a,r],c=[u,l];e.compute(ai(c,{activation:""},t,p),{inputs:c})}else e.compute(ai(e.inputs,{activation:""},t))}}}),cd,hd,fd,cf,hf,Ey=M(()=>{"use strict";ee(),ie(),ke(),ne(),cd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!B.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(B.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(B.size(l)!==p)throw new Error("zeroPoints input size error.")}},hd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=B.size(u),p=e[1].dims[2]/4,c=e[0].dataType,f=Se(t.k),g=Se(p),_=Se(s),y=u.concat([n,s]),v=n>1&&s/_%2===0?2:1,S=B.size(y)/_/v,w=64,b=[],k=[l,n,a/f],I=B.convertShape(e[1].dims).slice();I.splice(-1,1,p/g),b.push(...Y(k)),b.push(...Y(I)),b.push(...Y(e[2].dims)),e.length===4&&b.push(...Y(B.convertShape(e[3].dims)));let E=[l,n,s/_];b.push(...Y(E));let C=A=>{let x=k.length,D=N("a",e[0].dataType,x,f),U=N("b",12,I.length,g),P=N("scales",e[2].dataType,e[2].dims.length),G=[D,U,P],H=e.length===4?N("zero_points",12,e[3].dims.length):void 0;H&&G.push(H);let te=E.length,O=Q("output",e[0].dataType,te,_),W=ze(e[0].dataType),J=(()=>{switch(f){case 1:return`array<${W}, 8>`;case 2:return`mat4x2<${W}>`;case 4:return`mat2x4<${W}>`;default:throw new Error(`${f}-component is not supported.`)}})(),_e=Math.floor(32/t.bits),K=Math.floor(_e/8),ue=()=>{let j="";for(let Z=0;Z<K;Z++){let re=Z*t.bits*4,Ee=re+t.bits;j+=`
          // reuse a data (pass ${Z})
            var input_offset${Z>0?Z:""} = ${Z===0?D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${Z>0?Z:""}: ${J};
            for (var j${Z>0?Z:""}: u32 = 0; j${Z>0?Z:""} < ${8/f}; j${Z>0?Z:""}++) {
              a_data${Z>0?Z:""}[j${Z>0?Z:""}] = ${D.getByOffset(`input_offset${Z>0?Z:""}`)};
              input_offset${Z>0?Z:""}++;
            }
          `;for(let fe=0;fe<_*v;fe++)j+=`
            b_value = ${g===1?`b${fe}_data`:`b${fe}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${Z*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${re}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ee}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(ve,Ne)=>`${W}(b_value_lower[${Ne}]), ${W}(b_value_upper[${Ne}])`).join(", ")});
            b_dequantized_values = ${f===1?`${J}(${Array.from({length:8},(ve,Ne)=>`(b_quantized_values[${Ne}] - ${H?`zero_point${fe}`:"zero_point"}) * scale${fe}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${H?`zero_point${fe}`:"zero_point"}`).join(",")})) * scale${fe};`};
            workgroup_shared[local_id.x * ${v} + ${Math.floor(fe/_)}]${_>1?`[${fe%_}]`:""} += ${Array.from({length:8/f},(ve,Ne)=>`${f===1?`a_data${Z>0?Z:""}[${Ne}] * b_dequantized_values[${Ne}]`:`dot(a_data${Z>0?Z:""}[${Ne}], b_dequantized_values[${Ne}])`}`).join(" + ")};
          `}return j},L=()=>{let j=`
            var col_index = col * ${_};
            ${H?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${W}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let Z=0;Z<_*v;Z++)j+=`
            let scale${Z} = ${P.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Z} = ${W}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return j},q=()=>{let j=`col_index = col * ${_};`;for(let Z=0;Z<_*v;Z++)j+=`
            let b${Z}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,j};return`
        var<workgroup> workgroup_shared: array<${O.type.value}, ${v*w}>;
        ${A.declareVariables(...G,O)}
        ${A.mainStart([w,1,1])}
          let output_indices = ${O.offsetToIndices(`(global_idx / ${w}) * ${v}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${w}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${L()}
            for (var word: u32 = 0; word < ${p}; word += ${g}) {
              ${q()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ue()}
                word_offset += ${_e/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${v}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${w}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${v};
            }
            ${O.setByIndices(`${O.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${_};${v};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:C}},fd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=B.size(u),p=e[1].dims[2]/4,c=e[0].dataType,f=Se(t.k),g=Se(p),_=u.concat([n,s]),y=128,v=s%8===0?8:s%4===0?4:1,S=y/v,w=Math.floor(32/t.bits),b=S*g*w,k=b/f,I=b/t.blockSize,E=B.size(_)/v,C=[],A=[l,n,a/f],x=B.convertShape(e[1].dims).slice();x.splice(-1,1,p/g),C.push(...Y(A)),C.push(...Y(x)),C.push(...Y(e[2].dims)),e.length===4&&C.push(...Y(B.convertShape(e[3].dims)));let D=[l,n,s];C.push(...Y(D));let U=P=>{let G=A.length,H=N("a",e[0].dataType,G,f),te=N("b",12,x.length,g),O=N("scales",e[2].dataType,e[2].dims.length),W=[H,te,O],J=e.length===4?N("zero_points",12,e[3].dims.length):void 0;J&&W.push(J);let _e=D.length,K=Q("output",e[0].dataType,_e),ue=ze(e[0].dataType),L=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${k}>;
        var<workgroup> inter_results: array<array<${K.type.value}, ${S}>, ${v}>;
        ${P.declareVariables(...W,K)}
        ${P.mainStart([S,v,1])}
          let output_indices = ${K.offsetToIndices(`workgroup_index * ${v}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${I} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${k};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${k}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${H.getByIndices(`${H.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${H.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${I} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ue}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ue}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${O.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${te.getByIndices(`${te.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let q=Math.floor(w/8),j="";for(let Z=0;Z<q;Z++){let re=Z*t.bits*4,Ee=re+t.bits;j+=`
              ${L()}
              {${t.bits===2?`
                let half_word = b_value >> ${Z*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${re}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ee}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ue}>(${Array.from({length:4},(fe,ve)=>`${ue}(b_value_lower[${ve}]), ${ue}(b_value_upper[${ve}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ue}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(fe,ve)=>`${`dot(a_data${ve}, b_dequantized_values[${ve}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return j})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${v}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${K.setByIndices(`${K.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${S};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:E},programUniforms:C}),getShaderSource:U}},cf=(e,t)=>{cd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(fd(e.inputs,t)):e.compute(hd(e.inputs,t))},hf=e=>ge(e)}),md,gd,yd,_d,wd,bd,$d,vd,ff,Cy=M(()=>{"use strict";ee(),ie(),ne(),md=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},gd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${X("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},yd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},_d=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X("uniforms.x_shape",n,t)})) {
                  k = i32(${X("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},wd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${X("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${X("uniforms.x_shape",n,t)})) {
                  k -= i32(${X("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},bd=(e,t,r)=>{switch(r.mode){case 0:return gd(e,t,r.pads.length);case 1:return yd(e,t,r.pads.length);case 2:return _d(e,t,r.pads.length);case 3:return wd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},$d=(e,t)=>{let r=B.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=B.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...Y(e[0].dims,r));let u=["rank"],l=p=>{let c=Q("output",e[0].dataType,r.length),f=N("x",e[0].dataType,i.length),g=f.type.value,_=bd(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?g:"f32"}),`
            ${p.registerUniforms(y).declareVariables(f,c)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(r)/64)},programUniforms:a}),getShaderSource:l}},vd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)a[Number(u[l])]=Number(r[l]),a[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>a[Number(l)]=Number(u));let s=[];return a.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},ff=(e,t)=>{md(e.inputs);let r=vd(e.inputs,t);e.compute($d(e.inputs,r),{inputs:[0]})}}),mr,$n,vn,xn,Sn,xd,Sd,kn,Tn,mf,gf,In,yf,_f,En,wf,bf,$f,vf,zy=M(()=>{"use strict";Ge(),ee(),ie(),ne(),mr=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},$n=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=a?t.dilations.slice():[],p=t.pads.slice();ii.adjustPoolAttributes(r,n,s,u,l,p);let c=ii.computePoolOutputShape(r,n,u,l,s,p,t.autoPad,t.ceilMode),f=Object.assign({},t);a?Object.assign(f,{kernelShape:s,strides:u,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:p,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[f,i?g:c]},vn=(e,t)=>{let r=t.format==="NHWC",i=B.size(e),n=B.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(p+c);a.push({type:12,data:u},{type:12,data:l},{type:12,data:p},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],v=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(v+S),a.push({type:12,data:_},{type:12,data:y},{type:12,data:v},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=B.computeStrides(t.kernelShape);a.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,c)=>p+c);return[a,s,!!l,!1,!1]}},xn=(e,t,r,i,n,a,s,u,l,p,c,f)=>{let g=n.format==="NHWC",_=t.type.value,y=Q("output",t.type.tensor,i);if(n.kernelShape.length<=2){let v="",S="",w="",b=r-(g?2:1);if(c?v=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:v=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let k=r-(g?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,w=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${_}(${u});
              var pad = 0;
              ${S}
              ${v}
              ${w}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let v=n.kernelShape.length,S=n.pads.length,w="";return p?w=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:w=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${v}>;

              var value = ${_}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${v-1}u; j++) {
                  offsets[j] = offset / ${X("uniforms.kernelStrides","j",v)};
                  offset -= offsets[j] * ${X("uniforms.kernelStrides","j",v)};
                }
                offsets[${v-1}] = offset;

                isPad = false;
                for (var j = ${r-v}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${X("uniforms.strides",`j - ${r-v}u`,v)}
                    + offsets[j - ${r-v}u] - ${X("uniforms.pads","j - 2u",S)};
                  ${w}
              }
              ${s}

              output[global_idx] = value;
            }`}},Sn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,xd=e=>`${Sn(e)};${e.countIncludePad}`,Sd=e=>`${Sn(e)};${e.storageOrder};${e.dilations}`,kn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Tn=(e,t,r,i)=>{let[n,a]=$n(t,i,r),s=N("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",p="";n.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,g,_,y]=vn(a,n);c.push(...Y(t.dims,a));let v=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:c}),getShaderSource:S=>xn(S,s,t.dims.length,a.length,n,l,p,0,f,g,_,y)}},mf=e=>{let t=e.count_include_pad!==0,r=kn(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i=Fe(Me({countIncludePad:t},r),{cacheKey:""});return Fe(Me({},i),{cacheKey:xd(i)})},gf=(e,t)=>{mr(e.inputs),e.compute(Tn("AveragePool",e.inputs[0],!1,t))},In={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},yf=e=>{let t=e.format;return Fe(Me({format:t},In),{cacheKey:t})},_f=(e,t)=>{mr(e.inputs),e.compute(Tn("GlobalAveragePool",e.inputs[0],!0,t))},En=(e,t,r,i)=>{let[n,a]=$n(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=N("x",t.dataType,t.dims.length),p=["rank"],[c,f,g,_,y]=vn(a,n);return c.push(...Y(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${_};${y}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:c}),getShaderSource:v=>xn(v,l,t.dims.length,a.length,n,s,u,t.dataType===10?-65504:-1e5,f,g,_,y)}},wf=(e,t)=>{mr(e.inputs),e.compute(En("MaxPool",e.inputs[0],!1,t))},bf=e=>{let t=e.storage_order,r=e.dilations,i=kn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let n=Fe(Me({storageOrder:t,dilations:r},i),{cacheKey:""});return Fe(Me({},n),{cacheKey:Sd(n)})},$f=e=>{let t=e.format;return Fe(Me({format:t},In),{cacheKey:t})},vf=(e,t)=>{mr(e.inputs),e.compute(En("GlobalMaxPool",e.inputs[0],!0,t))}}),kd,Td,xf,Sf,Ay=M(()=>{"use strict";ee(),ie(),ke(),ne(),kd=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Td=(e,t)=>{let r=B.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,u=B.size(a),l=i===3||i===2,p=l?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(B.size(f.dims)/4)]:f.dims:void 0,_=c.length===0||c.length===1&&c[0]===1,y=_===!1&&c.length===1,v=Se(u),S=_&&(!l||v===4),w=S?v:1,b=S&&!l?v:1,k=N("input",l?12:i,p.length,b),I=N("scale",s,c.length),E=f?N("zero_point",l?12:i,g.length):void 0,C=Q("output",s,a.length,w),A=[k,I];E&&A.push(E);let x=[p,c];f&&x.push(g);let D=[{type:12,data:u/w},{type:12,data:r},{type:12,data:t.blockSize},...Y(...x,a)],U=P=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${P.registerUniforms(G).declareVariables(...A,C)}
      ${P.mainStart()}
          ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${w===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${I.getByOffset("0")}`:y?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?_?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:y?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(u/w/64),y:1,z:1},programUniforms:D})}},xf=(e,t)=>{kd(e.inputs,t),e.compute(Td(e.inputs,t))},Sf=e=>ge({axis:e.axis,blockSize:e.blockSize})}),Id,Ed,kf,Oy=M(()=>{"use strict";Ge(),ee(),ne(),Id=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},Ed=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...Y(a)],l=p=>{let c=Q("output",i,a.length),f=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${p.registerUniforms(g).declareVariables(c)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},kf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&Id(t,r,i),e.compute(Ed(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Cd,zd,Tf,If,By=M(()=>{"use strict";ee(),ie(),ke(),ne(),Cd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},zd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(B.sizeToDimension(i,i.length-1)/a),u=i[i.length-1],l=B.sizeFromDimension(r,u),p=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...Y(e[1].dims,e[2].dims,n)],c=f=>{let g=N("indices",e[1].dataType,e[1].dims.length),_=N("updates",e[2].dataType,e[2].dims.length,a),y=t.reduction!=="none"&&t.reduction!==""?Xp("output",e[0].dataType,n.length):Q("output",e[0].dataType,n.length,a);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Cd(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:c}},Tf=e=>ge({reduction:e.reduction}),If=(e,t)=>{e.compute(zd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ad,Od,Bd,Cn,Rd,Nd,Dd,Md,Ud,Pd,Ld,qd,zn,Wd,Vd,Gd,Hd,Fd,Ef,Cf,Ry=M(()=>{"use strict";ee(),ie(),ke(),ne(),Ad=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Od=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Bd=(e,t,r,i,n,a)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ad(i,t),t.axes.length>0&&Od(i,t.axes,p).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==p&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Cn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Rd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Cn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Cn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Nd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Dd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Md=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Ud=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Pd=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${X("uniforms.scales","i",i)};
        var roi_low = ${X("uniforms.roi","i",n)};
        var roi_hi = ${X("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ld=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${X("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X("uniforms.roi","i",a)};
          var roi_hi = ${X("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${X("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,qd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${X("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,zn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Wd=(e,t,r,i,n)=>{let[a,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${zn(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Vd=(e,t,r,i,n,a,s,u,l,p)=>{let c=r.length===2,f=!0,[g,_]=c?[0,1]:f?[2,3]:[1,2],y=e.type.value,v=S=>{let w=S===g?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[S]},
        ${i[S]}, ${r[S]}, ${a[S]}, ${a[S]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[S]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${y} = originalIdx + ${y}(i);
          if (${w} < 0 || ${w} >= ${r[S]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${w} = max(0, min(${w}, ${r[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${w})`)};
          data[i + 1] = ${S===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(g)};
    ${v(_)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Gd=(e,t,r,i,n)=>{let[a,s,u,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${zn(e,p,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Hd=(e,t,r,i,n,a)=>{let s=e.dims,u=Dd(a,t.axes,s.length),l=Md(s,i,n,t.axes),p=i.slice();i.length===0&&(p=s.map((b,k)=>b===0?1:l[k]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=Ud(s,p,t)));let c=Q("output",e.dataType,l.length),f=N("input",e.dataType,s.length),g=B.size(l),_=s.length===l.length&&s.every((b,k)=>b===l[k]),y=t.coordinateTransformMode==="tf_crop_and_resize",v=t.extrapolationValue,S=f.type.value,w=b=>`
      ${_?"":`
      ${Rd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${qd(f,s)};
              ${Nd(t.nearestMode,r,S)};
              ${Ld(f,c,s,l,p.length,u.length,y)};
              `;case"linear":return`
              ${Pd(c,s,l,p.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Wd(f,c,s,y,v)}`;if(s.length===3||s.length===5)return`${Gd(f,c,s,y,v)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Vd(f,c,s,l,p,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:p},{type:1,data:u},...Y(s,l)]})}},Fd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Ef=(e,t)=>{let r=[],i=[],n=[],a=Fd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Bd(e.inputs,t,a,r,i,n),e.compute(Hd(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Cf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return ge({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:p})}}),jd,Kd,zf,Ny=M(()=>{"use strict";ee(),ie(),ne(),jd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Kd=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=B.size(a),u=a,l=s,p=a.slice(-1)[0],c=i?a.slice(0,-1).concat(1):[],f=!n&&e.length>3,g=e.length>4,_=i&&r>1,y=i&&r>2,v=r>3,S=64,w=Se(p),b=[{type:12,data:l},{type:12,data:w},{type:12,data:p},{type:1,data:t.epsilon}],k=E=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[N("x",e[0].dataType,e[0].dims,w),N("skip",e[1].dataType,e[1].dims,w),N("gamma",e[2].dataType,e[2].dims,w)];f&&A.push(N("beta",e[3].dataType,e[3].dims,w)),g&&A.push(N("bias",e[4].dataType,e[4].dims,w)),A.push(Q("output",e[0].dataType,u,w)),_&&A.push(Q("mean_output",1,c)),y&&A.push(Q("inv_std_output",1,c)),v&&A.push(Q("input_skip_bias_sum",e[0].dataType,u,w));let x=ze(e[0].dataType),D=ze(1,w);return`

      ${E.registerUniforms(C).declareVariables(...A)}
      var<workgroup> sum_shared : array<${D}, ${S}>;
      var<workgroup> sum_squared_shared : array<${D}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${v?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${tr(x,w,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${xt("sum",w)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xt("square_sum",w)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:u,dataType:e[0].dataType}];return r>1&&I.push({dims:c,dataType:1}),r>2&&I.push({dims:c,dataType:1}),r>3&&I.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${w};${_};${y};${v}`,inputDependencies:e.map((E,C)=>"type")},getShaderSource:k,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:b})}},zf=(e,t)=>{jd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Kd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Zd,gr,Qd,An,Xd,Yd,Af,Of,Dy=M(()=>{"use strict";ee(),ie(),ke(),ne(),Zd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},gr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Qd=(e,t)=>{if(e.length>1){let r=gr(e,1),i=gr(e,2),n=gr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),ge({starts:r,ends:i,axes:n})}else return t},An=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Xd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${X("uniforms.input_shape","i",r.length)};
            let steps_i = ${X("uniforms.steps","i",r.length)};
            let signs_i = ${X("uniforms.signs","i",r.length)};
            let starts_i = ${X("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Yd=(e,t)=>{let r=e[0].dims,i=B.size(r),n=t.axes.length>0?B.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=gr(e,4);a.forEach(w=>w!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((w,b)=>An(w,b,r,n,a)),u=t.ends.map((w,b)=>An(w,b,r,n,a));if(n.length!==s.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let w=0;w<r.length;++w)n.includes(w)||(s.splice(w,0,0),u.splice(w,0,r[w]),a.splice(w,0,1));let l=a.map(w=>Math.sign(w));a.forEach((w,b,k)=>{if(w<0){let I=(u[b]-s[b])/w,E=s[b],C=E+I*a[b];s[b]=C,u[b]=E,k[b]=-w}});let p=r.slice(0);n.forEach((w,b)=>{p[w]=Math.ceil((u[w]-s[w])/a[w])});let c={dims:p,dataType:e[0].dataType},f=Q("output",e[0].dataType,p.length),g=N("input",e[0].dataType,e[0].dims.length),_=B.size(p),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],v=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:a},...Y(e[0].dims,p)],S=w=>`
      ${w.registerUniforms(y).declareVariables(g,f)}
        ${Xd(g,f,r)}
        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:v})}},Af=(e,t)=>{Zd(e.inputs,t);let r=Qd(e.inputs,t);e.compute(Yd(e.inputs,r),{inputs:[0]})},Of=e=>{let t=e.starts,r=e.ends,i=e.axes;return ge({starts:t,ends:r,axes:i})}}),Jd,ep,Bf,Rf,My=M(()=>{"use strict";ee(),ie(),ke(),St(),ne(),Jd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ep=(e,t)=>{let r=e.inputs[0],i=r.dims,n=B.size(i),a=i.length,s=B.normalizeAxis(t.axis,a),u=s<i.length-1,l,p=[];u?(p=Array.from({length:a},(A,x)=>x),p[s]=a-1,p[a-1]=s,l=e.compute(Ve(r,p),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[a-1],g=n/f,_=Se(f),y=f/_,v=64;g===1&&(v=256);let S=(A,x)=>x===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:x===2?`max(${A}.x, ${A}.y)`:x===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,w=N("x",l.dataType,l.dims,_),b=Q("result",l.dataType,l.dims,_),k=w.type.value,I=ze(l.dataType)==="f32"?`var threadMax = ${k}(-3.4028234663852886e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${v}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(w,b)}
      ${A.mainStart(v)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${v};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${S("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${xt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${k}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${_};${v}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ve(C,p),{inputs:[C]})},Bf=(e,t)=>{Jd(e.inputs),ep(e,t)},Rf=e=>ge({axis:e.axis})}),On,tp,rp,ip,Nf,Uy=M(()=>{"use strict";ee(),ie(),ne(),On=e=>Array.from(e.getBigInt64Array(),Number),tp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(On(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},ip=(e,t)=>{let r=e[0].dims,i=t!=null?t:On(e[1]),n=rp(r,i),a=B.size(n),s=e[0].dataType,u=N("input",s,r.length),l=Q("output",s,n.length),p=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...Y(e[0].dims,n)]}),getShaderSource:p}},Nf=e=>{tp(e.inputs),e.compute(ip(e.inputs),{inputs:[0]})}}),np,ap,Df,Py=M(()=>{"use strict";ee(),ie(),ne(),np=(e,t,r,i,n)=>{let a=Q("output_data",n,r.length,4),s=N("a_data",t[1].dataType,t[1].dims.length,4),u=N("b_data",t[2].dataType,t[2].dims.length,4),l=N("c_data",t[0].dataType,t[0].dims.length,4),p,c=(f,g,_)=>`select(${g}, ${f}, ${_})`;if(!i)p=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,_,y="")=>{let v=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,w=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${a.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let offset_b${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${y}(${c(v,S,w)});
          `};n===9?p=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},ap=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(B.areEqual(t,r)&&B.areEqual(r,i)),s=t,u=B.size(t);if(a){let p=rr.calcShape(rr.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,u=B.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>np(p,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...Y(i,t,r,s)]})}},Df=e=>{e.compute(ap(e.inputs))}}),Mf,Ly=M(()=>{"use strict";J0(),ma(),ey(),ty(),ry(),iy(),ny(),ly(),py(),cy(),hy(),fy(),my(),gy(),yy(),_y(),wy(),by(),$y(),vy(),xy(),Sy(),ky(),Ty(),Iy(),Ey(),tf(),Cy(),zy(),Ay(),Oy(),By(),fa(),Ry(),of(),Ny(),Dy(),My(),af(),Uy(),St(),ga(),Py(),Mf=new Map([["Abs",[Tc]],["Acos",[Ic]],["Acosh",[Ec]],["Add",[lh]],["ArgMax",[vc,Wn]],["ArgMin",[$c,Wn]],["Asin",[Cc]],["Asinh",[zc]],["Atan",[Ac]],["Atanh",[Oc]],["Attention",[xc]],["AveragePool",[gf,mf]],["BatchNormalization",[Sc]],["BiasAdd",[kc]],["BiasSplitGelu",[uh]],["Cast",[Rc,Bc]],["Ceil",[Dc]],["Clip",[Nc]],["Concat",[wh,bh]],["Conv",[Kn,jn]],["ConvTranspose",[zh,Ch]],["Cos",[Mc]],["Cosh",[Uc]],["CumSum",[Ah,Oh]],["DepthToSpace",[Bh,Rh]],["DequantizeLinear",[xf,Sf]],["DFT",[Nh,Dh]],["Div",[dh]],["Einsum",[Mh,Uh]],["Elu",[Pc,$r]],["Equal",[ph]],["Erf",[Lc]],["Exp",[qc]],["Expand",[Ph]],["FastGelu",[Lh]],["Floor",[Wc]],["FusedConv",[Kn,jn]],["Gather",[Wh,qh]],["GatherElements",[Kh,jh]],["GatherBlockQuantized",[Hh,Fh]],["GatherND",[Vh,Gh]],["Gelu",[Vc]],["Gemm",[Qh,Zh]],["GlobalAveragePool",[_f,yf]],["GlobalMaxPool",[vf,$f]],["Greater",[mh]],["GreaterOrEqual",[yh]],["GridSample",[Xh,Yh]],["GroupQueryAttention",[uf]],["HardSigmoid",[Xc,Qc]],["HardSwish",[Yc]],["InstanceNormalization",[lf]],["LayerNormalization",[df]],["LeakyRelu",[Gc,$r]],["Less",[gh]],["LessOrEqual",[_h]],["Log",[sh]],["MatMul",[pf]],["MatMulNBits",[cf,hf]],["MaxPool",[wf,bf]],["Mul",[ch]],["MultiHeadAttention",[ef,Jh]],["Neg",[Fc]],["Not",[Hc]],["Pad",[ff]],["Pow",[hh]],["QuickGelu",[oh,$r]],["Range",[kf]],["Reciprocal",[jc]],["ReduceMin",[gc]],["ReduceMean",[pc]],["ReduceMax",[mc]],["ReduceSum",[_c]],["ReduceProd",[yc]],["ReduceL1",[cc]],["ReduceL2",[hc]],["ReduceLogSum",[bc]],["ReduceLogSumExp",[fc]],["ReduceSumSquare",[wc]],["Relu",[Kc]],["Resize",[Ef,Cf]],["RotaryEmbedding",[sf]],["ScatterND",[If,Tf]],["Sigmoid",[Zc]],["Sin",[Jc]],["Sinh",[eh]],["Slice",[Af,Of]],["SkipLayerNormalization",[zf]],["Split",[rf,nf]],["Sqrt",[th]],["Softmax",[Bf,Rf]],["Sub",[fh]],["Tan",[rh]],["Tanh",[ih]],["ThresholdedRelu",[ah,$r]],["Tile",[Nf]],["Transpose",[Jp,ec]],["Where",[Df]]])}),Uf,qy=M(()=>{"use strict";Ge(),mt(),ne(),Uf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){je(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let p of t)u.push({binding:u.length,resource:{buffer:p.buffer}});for(let p of r)u.push({binding:u.length,resource:{buffer:p.buffer}});n&&u.push({binding:u.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),We(e.programInfo.name)}dispose(){}build(e,t){je(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let n=Yp(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,u=r.createShaderModule({code:s,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return We(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Pf={};nr(Pf,{WebGpuBackend:()=>Lf});var sp,op,up,Lf,Wy=M(()=>{"use strict";Ge(),ee(),mt(),jp(),X0(),Ly(),qy(),sp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},op=(e,t,r)=>{var n,a,s;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${sp(t,(s=(a=e.shaderCache)==null?void 0:a.inputDependencies)!=null?s:new Array(t.length).fill("dims"))}`,i},up=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Lf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){var u;this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=l=>t.features.has(l)&&r.push(l)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=(u=t.info)!=null?u:typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0;this.adapterInfo=new up(s),this.gpuDataManager=Qp(this),this.programManager=new Uf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,da(e.logLevel,!!e.debug),this.device.onuncapturederror=l=>{l.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${l.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;je(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,u=this.kernels.get(s),l=u.kernelType,p=u.kernelName,c=a.programName,f=a.inputTensorViews,g=a.outputTensorViews,_=t[n*2],y=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let v=Number(_-this.queryTimeBase),S=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(v)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(w=>({dims:w.dims,dataType:ft(w.dataType)})),outputsMetadata:g.map(w=>({dims:w.dims,dataType:ft(w.dataType)})),kernelId:s,kernelType:l,kernelName:p,programName:c,startTime:v,endTime:S});else{let w="";f.forEach((k,I)=>{w+=`input[${I}]: [${k.dims}] | ${ft(k.dataType)}, `});let b="";g.forEach((k,I)=>{b+=`output[${I}]: [${k.dims}] | ${ft(k.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${p}|${c}" ${w}${b}start time: ${v} ns, execution time: ${S-v} ns`)}ei("GPU",`${c}::${_}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),We()}run(e,t,r,i,n,a){je(e.name);let s=[];for(let b=0;b<t.length;++b){let k=t[b].data;if(k===0)continue;let I=this.gpuDataManager.get(k);if(!I)throw new Error(`no GPU data for input: ${k}`);s.push(I)}let{outputs:u,dispatchGroup:l,programUniforms:p}=e.getRunData(t),c=r.length===0?u.map((b,k)=>k):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],g=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=a)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let k=c[b]===-1,I=c[b]===-2,E=k||I?n(u[b].dataType,u[b].dims):i(c[b],u[b].dataType,u[b].dims);if(f.push(E),E.data===0)continue;let C=this.gpuDataManager.get(E.data);if(!C)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(C),I){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(C)}g.push(C)}if(s.length!==t.length||g.length!==f.length){if(g.length===0)return We(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(p){let b=0,k=[];p.forEach(A=>{let x=typeof A.data=="number"?[A.data]:A.data;if(x.length===0)return;let D=A.type===10?2:4,U,P;A.type===10?(P=x.length>4?16:x.length>2?8:x.length*D,U=x.length>4?16:D*x.length):(P=x.length<=2?x.length*D:16,U=16),b=Math.ceil(b/P)*P,k.push(b);let G=A.type===10?8:4;b+=x.length>4?Math.ceil(x.length/G)*U:x.length*D});let I=16;b=Math.ceil(b/I)*I;let E=new ArrayBuffer(b);p.forEach((A,x)=>{let D=k[x],U=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,D,U.length).set(U);else if(A.type===12)new Uint32Array(E,D,U.length).set(U);else if(A.type===10)new Uint16Array(E,D,U.length).set(U);else if(A.type===1)new Float32Array(E,D,U.length).set(U);else throw new Error(`Unsupported uniform type: ${ft(A.type)}`)});let C=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,E,0,b),this.gpuDataManager.release(C.id),_={offset:0,size:b,buffer:C.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),v=y[1]===1&&y[2]===1,S=op(e,t,v),w=this.programManager.getArtifact(S);if(w||(w=this.programManager.build(e,y),this.programManager.setArtifact(S,w),pe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),p&&w.uniformVariablesInfo){if(p.length!==w.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${w.uniformVariablesInfo.length}, got ${p.length} in program "${w.programInfo.name}".`);for(let b=0;b<p.length;b++){let k=p[b],I=k.type,E=typeof k.data=="number"?1:k.data.length,[C,A]=w.uniformVariablesInfo[b];if(I!==C||E!==A)throw new Error(`Uniform variable ${b} mismatch: expect type ${C} with size ${A}, got type ${I} with size ${E} in program "${w.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:w.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(w,s,g,y,_),We(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Mf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${n}] ${a}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Pn(this,e,t);return pa(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),qf={};nr(qf,{init:()=>Wf});var Zr,lp,Wf,Vy=M(()=>{"use strict";ee(),mt(),ie(),Q0(),Zr=class Vf{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new Vf(this.module,this.dataType,this.data,t)}},lp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceLimits=t.device.limits;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let u=[];for(let l=0;l<s;l++){let p=Number(e.getValue(i*n++,a)),c=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,a)),g=[];for(let _=0;_<f;_++)g.push(Number(e.getValue(i*n++,a)));u.push(new Zr(e,p,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s,u,l;let r=(u=(s=t==null?void 0:t.inputs)==null?void 0:s.map(p=>typeof p=="number"?this.inputs[p]:p))!=null?u:this.inputs,i=(l=t==null?void 0:t.outputs)!=null?l:[],n=(p,c,f)=>new Zr(this.module,c,this.output(p,f),f),a=(p,c)=>{let f=Wt(p,c);if(!f)throw new Error(`Unsupported data type: ${p}`);let g=f>0?this.backend.gpuDataManager.create(f).id:0;return new Zr(this.module,p,g,c)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Wf=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Wy(),Sr(Pf)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,p,c=!1)=>{if(c)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(p)}`),s.memcpy(Number(u),Number(l));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(p));s.upload(Number(l),f)}},async(u,l,p)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${p}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(u,l,p)=>s.createKernel(u,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,p,c)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${u}, contextDataOffset=${l}`);let f=new lp(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Zp(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,u,l,p,c)=>a.ensureTensor(s,u,l,p,c),(s,u)=>{a.uploadTensor(s,u)},async(s,u)=>a.downloadTensor(s,u),(s,u)=>a.registerMLContext(s,u),!!r.trace])}}}),dp,va,xa,$t,pp,Bn,oi,Sa,ka,yr,cp,Mt,Gf,Hf,Rn,Ta,Ia,Ea,Ff=M(()=>{"use strict";Ge(),j0(),K0(),ee(),Zt(),sa(),la(),dp=(e,t)=>{me()._OrtInit(e,t)!==0&&he("Can't initialize onnxruntime.")},va=async e=>{dp(e.wasm.numThreads,ri(e.logLevel))},xa=async(e,t)=>{var i,n;(n=(i=me()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Vy(),Sr(qf)).init;t==="webgpu"&&await a("webgpu",me(),e,r),t==="webnn"&&await a("webnn",me(),e)}},$t=new Map,pp=e=>{let t=me(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&he("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Bn=(e,t)=>{let r=me(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&he("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[u,0];let p=r.HEAPU32[n/4+1],c=[];for(let f=0;f<p;f++){let g=Number(r.getValue(n+8+f*a,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(f+p)*a,"*")))}return[u,l,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},oi=e=>{let t=me(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Sa=async(e,t)=>{var f,g,_,y,v,S;let r,i,n=me();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=oi(e);let a=0,s=0,u=0,l=[],p=[],c=[];try{if([s,l]=await Vp(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let U=[];for(let P of t.externalData){let G=typeof P=="string"?P:P.path,H=typeof P=="string"?P:P.data;U.push(li(H).then(te=>{n.mountExternalData(G,te)}))}await Promise.all(U)}for(let U of(f=t==null?void 0:t.executionProviders)!=null?f:[])if((typeof U=="string"?U:U.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof U!="string"){let P=U,G=P==null?void 0:P.context,H=P==null?void 0:P.gpuDevice,te=P==null?void 0:P.deviceType,O=P==null?void 0:P.powerPreference;G?n.currentContext=G:H?n.currentContext=await n.webnnCreateMLContext(H):n.currentContext=await n.webnnCreateMLContext({deviceType:te,powerPreference:O})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(g=n.webgpuOnCreateSession)==null||g.call(n,a),a===0&&he("Can't create a session."),(_=n.jsepOnCreateSession)==null||_.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[w,b]=pp(a),k=!!(t!=null&&t.enableGraphCapture),I=[],E=[],C=[],A=[],x=[];for(let U=0;U<w;U++){let[P,G,H]=Bn(a,U);P===0&&he("Can't get an input name."),p.push(P);let te=n.UTF8ToString(P);I.push(te),C.push(G===0?{name:te,isTensor:!1}:{name:te,isTensor:!0,type:ft(G),shape:H})}for(let U=0;U<b;U++){let[P,G,H]=Bn(a,U+w);P===0&&he("Can't get an output name."),c.push(P);let te=n.UTF8ToString(P);E.push(te),A.push(G===0?{name:te,isTensor:!1}:{name:te,isTensor:!0,type:ft(G),shape:H});{if(k&&(t==null?void 0:t.preferredOutputLocation)===void 0){x.push("gpu-buffer");continue}let O=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:(v=(y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[te])!=null?v:"cpu",W=n.webnnIsGraphOutput;if(O==="cpu"&&W&&W(a,te)){x.push("ml-tensor-cpu-output");continue}if(O!=="cpu"&&O!=="cpu-pinned"&&O!=="gpu-buffer"&&O!=="ml-tensor")throw new Error(`Not supported preferred output location: ${O}.`);if(k&&O!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${O}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(O)}}let D=null;return x.some(U=>U==="gpu-buffer"||U==="ml-tensor"||U==="ml-tensor-cpu-output")&&(u=n._OrtCreateBinding(a),u===0&&he("Can't create IO binding."),D={handle:u,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(U=>U==="ml-tensor-cpu-output"?"ml-tensor":U).map(U=>Un(U))}),$t.set(a,[a,p,c,D,k,!1]),[a,I,E,C,A]}catch(w){throw p.forEach(b=>n._OrtFree(b)),c.forEach(b=>n._OrtFree(b)),u!==0&&n._OrtReleaseBinding(u)!==0&&he("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&he("Can't release session."),w}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&he("Can't release session options."),l.forEach(w=>n._free(w)),(S=n.unmountExternalData)==null||S.call(n)}},ka=e=>{var l,p,c;let t=me(),r=$t.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&he("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&he("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(p=t.webnnOnReleaseSession)==null||p.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),n.forEach(f=>t._OrtFree(f)),a.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&he("Can't release session."),$t.delete(e)},yr=new Map,cp=1,Mt=new Map,Gf=e=>{let t=me(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);try{t.HEAPU8.set(e,r);let i=t._OrtCreateLoraAdapter(r,e.byteLength);i===0&&he("Can't create a LoRA adapter.");let n=cp++;return yr.set(n,i),n}finally{t._free(r)}},Hf=e=>{let t=me(),r=yr.get(e);if(r===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);if(Mt.has(e))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);t._OrtReleaseLoraAdapter(r)!==0&&he("Can't release LoRA adapter."),yr.delete(e)},Rn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let u=me(),l=u.PTR_SIZE,p=e[0],c=e[1],f=e[3],g=f,_,y;if(p==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let w=e[2].gpuBuffer;y=Wt(qt(p),c);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(i,a,w,y)}}else if(f==="ml-tensor"){let w=e[2].mlTensor;y=Wt(qt(p),c);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(i,w,qt(p),c)}else{let w=e[2];if(Array.isArray(w)){y=l*w.length,_=u._malloc(y),r.push(_);for(let b=0;b<w.length;b++){if(typeof w[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(_+b*l,tt(w[b],r),"*")}}else{let b=u.webnnIsGraphInput,k=u.webnnIsGraphOutput;if(p!=="string"&&b&&k){let I=u.UTF8ToString(n);if(b(i,I)||k(i,I)){let E=qt(p);y=Wt(E,c),g="ml-tensor";let C=u.webnnCreateTemporaryTensor,A=u.webnnUploadTensor;if(!C||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await C(i,E,c);A(x,new Uint8Array(w.buffer,w.byteOffset,w.byteLength)),_=x}else y=w.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,y),_)}else y=w.byteLength,_=u._malloc(y),r.push(_),u.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,y),_)}}let v=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((b,k)=>u.setValue(S+k*l,b,l===4?"i32":"i64"));let w=u._OrtCreateTensor(qt(p),_,y,S,c.length,Un(g));w===0&&he(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(w)}finally{u.stackRestore(v)}},Ta=async(e,t,r,i,n,a,s=[])=>{var te,O,W,J,_e;let u=me(),l=u.PTR_SIZE,p=$t.get(e);if(!p)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=p[0],f=p[1],g=p[2],_=p[3],y=p[4],v=p[5],S=[];if(s.length>0){if(_)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let K of s){let ue=yr.get(K);if(ue===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${K}`);S.push(ue)}}let w=t.length,b=i.length,k=0,I=[],E=[],C=[],A=[],x=[],D=u.stackSave(),U=u.stackAlloc(w*l),P=u.stackAlloc(w*l),G=u.stackAlloc(b*l),H=u.stackAlloc(b*l);try{for(let q of s)Mt.set(q,((te=Mt.get(q))!=null?te:0)+1);[k,I]=Wp(a,S),Vt("wasm prepareInputOutputTensor");for(let q=0;q<w;q++)await Rn(r[q],E,A,e,f[t[q]],t[q],y);for(let q=0;q<b;q++)await Rn(n[q],C,A,e,g[i[q]],w+i[q],y);Gt("wasm prepareInputOutputTensor");for(let q=0;q<w;q++)u.setValue(U+q*l,E[q],"*"),u.setValue(P+q*l,f[t[q]],"*");for(let q=0;q<b;q++)u.setValue(G+q*l,C[q],"*"),u.setValue(H+q*l,g[i[q]],"*");if(_&&!v){let{handle:q,outputPreferredLocations:j,outputPreferredLocationsEncoded:Z}=_;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);Vt("wasm bindInputsOutputs");for(let re=0;re<w;re++){let Ee=t[re];await u._OrtBindInput(q,f[Ee],E[re])!==0&&he(`Can't bind input[${re}] for session=${e}.`)}for(let re=0;re<b;re++){let Ee=i[re];(O=n[re])!=null&&O[3]?(x.push(C[re]),u._OrtBindOutput(q,g[Ee],C[re],0)!==0&&he(`Can't bind pre-allocated output[${re}] for session=${e}.`)):u._OrtBindOutput(q,g[Ee],0,Z[Ee])!==0&&he(`Can't bind output[${re}] to ${j[re]} for session=${e}.`)}Gt("wasm bindInputsOutputs"),$t.set(e,[c,f,g,_,y,!0])}(W=u.jsepOnRunStart)==null||W.call(u,c),(J=u.webnnOnRunStart)==null||J.call(u,c);let K;_?K=await u._OrtRunWithBinding(c,_.handle,b,G,k):K=await u._OrtRun(c,P,U,w,H,b,G,k),K!==0&&he("failed to call OrtRun().");let ue=[],L=[];Vt("wasm ProcessOutputTensor");for(let q=0;q<b;q++){let j=Number(u.getValue(G+q*l,"*"));if(j===C[q]||x.includes(C[q])){ue.push(n[q]),j!==C[q]&&u._OrtReleaseTensor(j)!==0&&he("Can't release tensor.");continue}let Z=u.stackSave(),re=u.stackAlloc(4*l),Ee=!1,fe,ve=0;try{u._OrtGetTensorData(j,re,re+l,re+2*l,re+3*l)!==0&&he(`Can't access output tensor data on index ${q}.`);let Ne=l===4?"i32":"i64",kt=Number(u.getValue(re,Ne));ve=u.getValue(re+l,"*");let Tt=u.getValue(re+l*2,"*"),It=Number(u.getValue(re+l*3,Ne)),Ke=[];for(let Te=0;Te<It;Te++)Ke.push(Number(u.getValue(Tt+Te*l,Ne)));u._OrtFree(Tt)!==0&&he("Can't free memory for tensor dims.");let Re=Ke.reduce((Te,xe)=>Te*xe,1);fe=ft(kt);let ye=_==null?void 0:_.outputPreferredLocations[i[q]];if(fe==="string"){if(ye==="gpu-buffer"||ye==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Te=[];for(let xe=0;xe<Re;xe++){let Pe=u.getValue(ve+xe*l,"*"),it=u.getValue(ve+(xe+1)*l,"*"),Et=xe===Re-1?void 0:it-Pe;Te.push(u.UTF8ToString(Pe,Et))}ue.push([fe,Ke,Te,"cpu"])}else if(ye==="gpu-buffer"&&Re>0){let Te=u.jsepGetBuffer;if(!Te)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let xe=Te(ve),Pe=Wt(kt,Re);if(Pe===void 0||!oa(fe))throw new Error(`Unsupported data type: ${fe}`);Ee=!0,ue.push([fe,Ke,{gpuBuffer:xe,download:u.jsepCreateDownloader(xe,Pe,fe),dispose:()=>{u._OrtReleaseTensor(j)!==0&&he("Can't release tensor.")}},"gpu-buffer"])}else if(ye==="ml-tensor"&&Re>0){let Te=u.webnnEnsureTensor,xe=u.webnnIsGraphInputOutputTypeSupported;if(!Te||!xe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Wt(kt,Re)===void 0||!ua(fe))throw new Error(`Unsupported data type: ${fe}`);if(!xe(e,fe,!1))throw new Error(`preferredLocation "ml-tensor" for ${fe} output is not supported by current WebNN Context.`);let Pe=await Te(e,ve,kt,Ke,!1);Ee=!0,ue.push([fe,Ke,{mlTensor:Pe,download:u.webnnCreateMLTensorDownloader(ve,fe),dispose:()=>{u.webnnReleaseTensorId(ve),u._OrtReleaseTensor(j)}},"ml-tensor"])}else if(ye==="ml-tensor-cpu-output"&&Re>0){let Te=u.webnnCreateMLTensorDownloader(ve,fe)(),xe=ue.length;Ee=!0,L.push((async()=>{let Pe=[xe,await Te];return u.webnnReleaseTensorId(ve),u._OrtReleaseTensor(j),Pe})()),ue.push([fe,Ke,[],"cpu"])}else{let Te=ui(fe),xe=new Te(Re);new Uint8Array(xe.buffer,xe.byteOffset,xe.byteLength).set(u.HEAPU8.subarray(ve,ve+xe.byteLength)),ue.push([fe,Ke,xe,"cpu"])}}finally{u.stackRestore(Z),fe==="string"&&ve&&u._free(ve),Ee||u._OrtReleaseTensor(j)}}_&&!y&&(u._OrtClearBoundOutputs(_.handle)!==0&&he("Can't clear bound outputs."),$t.set(e,[c,f,g,_,y,!1]));for(let[q,j]of await Promise.all(L))ue[q][2]=j;return Gt("wasm ProcessOutputTensor"),ue}finally{(_e=u.webnnOnRunEnd)==null||_e.call(u,c),u.stackRestore(D),E.forEach(K=>u._OrtReleaseTensor(K)),C.forEach(K=>u._OrtReleaseTensor(K)),A.forEach(K=>u._free(K)),k!==0&&u._OrtReleaseRunOptions(k),I.forEach(K=>u._free(K));for(let K of s){let ue=Mt.get(K)-1;ue===0?Mt.delete(K):Mt.set(K,ue)}}},Ia=e=>{let t=me(),r=$t.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&he("Can't get an profile file name."),t._OrtFree(n)},Ea=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ut,Ue,Jt,_r,wr,Qr,Nn,Xr,Ut,Pt,hp,jf,Kf,Zf,Qf,Xf,Yf,Jf,em,tm,Ca=M(()=>{"use strict";Ge(),Ff(),Zt(),na(),la(),ut=()=>!!be.wasm.proxy&&typeof document<"u",Jt=!1,_r=!1,wr=!1,Xr=new Map,Ut=(e,t)=>{let r=Xr.get(e);r?r.push(t):Xr.set(e,[t])},Pt=()=>{if(Jt||!_r||wr||!Ue)throw new Error("worker not ready")},hp=e=>{switch(e.data.type){case"init-wasm":Jt=!1,e.data.err?(wr=!0,Nn[1](e.data.err)):(_r=!0,Nn[0]()),Qr&&(URL.revokeObjectURL(Qr),Qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Xr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},jf=async()=>{if(!_r){if(Jt)throw new Error("multiple calls to 'initWasm()' detected.");if(wr)throw new Error("previous call to 'initWasm()' failed.");if(Jt=!0,ut())return new Promise((e,t)=>{Ue==null||Ue.terminate(),Lp().then(([r,i])=>{try{Ue=i,Ue.onerror=a=>t(a),Ue.onmessage=hp,Nn=[e,t];let n={type:"init-wasm",in:be};!n.in.wasm.wasmPaths&&(r||Mn)&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",rt.url).href}),Ue.postMessage(n),Qr=r}catch(n){t(n)}},t)});try{await aa(be.wasm),await va(be),_r=!0}catch(e){throw wr=!0,e}finally{Jt=!1}}},Kf=async e=>{if(ut())return Pt(),new Promise((t,r)=>{Ut("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:be}};Ue.postMessage(i)});await xa(be,e)},Zf=async e=>ut()?(Pt(),new Promise((t,r)=>{Ut("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ue.postMessage(i,[e.buffer])})):oi(e),Qf=async(e,t)=>{if(ut()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Pt(),new Promise((r,i)=>{Ut("create",[r,i]);let n={type:"create",in:{model:e,options:Me({},t)}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ue.postMessage(n,a)})}else return Sa(e,t)},Xf=async e=>{if(ut())return Pt(),new Promise((t,r)=>{Ut("release",[t,r]);let i={type:"release",in:e};Ue.postMessage(i)});ka(e)},Yf=async e=>{if(ut())throw new Error("LoRA adapter is not supported for proxy.");let t=typeof e=="string"?await li(e):e;return Gf(t)},Jf=async e=>{if(ut())throw new Error("LoRA adapter is not supported for proxy.");Hf(e)},em=async(e,t,r,i,n,a,s)=>{if(ut()){if(s.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(r.some(u=>u[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(u=>u))throw new Error("pre-allocated output tensor is not supported for proxy.");return Pt(),new Promise((u,l)=>{Ut("run",[u,l]);let p=r,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:i,options:a}};Ue.postMessage(c,Ea(p))})}else return Ta(e,t,r,i,n,a,s)},tm=async e=>{if(ut())return Pt(),new Promise((t,r)=>{Ut("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ue.postMessage(i)});Ia(e)}}),za,rm=M(()=>{"use strict";Ge(),Ca(),za=class{async loadAdapter(e){je(),this.adapterId=await Yf(e),We()}async dispose(){return Jf(this.adapterId)}}}),Dn,fp,im,Gy=M(()=>{"use strict";Ge(),rm(),Ca(),ee(),ia(),la(),Dn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},fp=e=>{switch(e[3]){case"cpu":return new Be(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!oa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Be.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!ua(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Be.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},im=class{async fetchModelAndCopyToWasmMemory(e){return Zf(await li(e))}async loadModel(e,t){je();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Qf(r,t),We()}async dispose(){return Xf(this.sessionId)}async run(e,t,r,i=[]){var _;je();let n=i.map(y=>{if(!(y instanceof za))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return y.adapterId}),a=[],s=[];Object.entries(e).forEach(y=>{let v=y[0],S=y[1],w=this.inputNames.indexOf(v);if(w===-1)throw new Error(`invalid input '${v}'`);a.push(S),s.push(w)});let u=[],l=[];Object.entries(t).forEach(y=>{let v=y[0],S=y[1],w=this.outputNames.indexOf(v);if(w===-1)throw new Error(`invalid output '${v}'`);u.push(S),l.push(w)});let p=a.map((y,v)=>Dn(y,()=>`input "${this.inputNames[s[v]]}"`)),c=u.map((y,v)=>y?Dn(y,()=>`output "${this.outputNames[l[v]]}"`):null),f=await em(this.sessionId,s,p,l,c,r,n),g={};for(let y=0;y<f.length;y++)g[this.outputNames[l[y]]]=(_=u[y])!=null?_:fp(f[y]);return We(),g}startProfiling(){}endProfiling(){tm(this.sessionId)}}}),nm,Hy=M(()=>{"use strict";nm=e=>{if(e!=null&&e.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),am={};nr(am,{OnnxruntimeWebAssemblyBackend:()=>Xn,initializeFlags:()=>Qn,wasmBackend:()=>sm});var Qn,Xn,sm,Fy=M(()=>{"use strict";Ge(),rm(),Ca(),Gy(),Hy(),Qn=()=>{(typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0);let e=be.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),be.wasm.simd=!1),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let t=typeof navigator>"u"?E0("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Xn=class{async init(e){Qn(),await jf(),await Kf(e)}async createInferenceSessionHandler(e,t){nm(t);let r=new im;return await r.loadModel(e,t),r}async createLoraAdapterHandler(e){let t=new za;return await t.loadAdapter(e),t}},sm=new Xn});Ge();Ge();Ge();var jy="1.31.1";{let e=(Fy(),Sr(am)).wasmBackend;er("webgpu",e,5),er("webnn",e,5),er("cpu",e,10),er("wasm",e,10)}Object.defineProperty(be.versions,"web",{value:jy,enumerable:!0});var om={alexa:"alexa_v0.1.onnx",hey_mycroft:"hey_mycroft_v0.1.onnx",hey_jarvis:"hey_jarvis_v0.1.onnx",hey_rhasspy:"hey_rhasspy_v0.1.onnx",timer:"timer_v0.1.onnx",weather:"weather_v0.1.onnx"},Zy=`
class AudioProcessor extends AudioWorkletProcessor {
    bufferSize = 1280;
    _buffer = new Float32Array(this.bufferSize);
    _pos = 0;
    process(inputs) {
        const input = inputs[0][0];
        if (input) {
            for (let i = 0; i < input.length; i++) {
                this._buffer[this._pos++] = input[i];
                if (this._pos === this.bufferSize) {
                    this.port.postMessage(this._buffer);
                    this._pos = 0;
                }
            }
        }
        return true;
    }
}
registerProcessor('audio-processor', AudioProcessor);
`,Qy=()=>{let e=new Map;return{on(t,r){return e.has(t)||e.set(t,new Set),e.get(t).add(r),()=>this.off(t,r)},off(t,r){let i=e.get(t);i&&i.delete(r)},emit(t,r){let i=e.get(t);if(i)for(let n of Array.from(i))n(r)}}},ar=class{constructor({keywords:t=["hey_jarvis"],modelFiles:r=om,baseAssetUrl:i="/models",ortWasmPath:n,frameSize:a=1280,sampleRate:s=16e3,vadHangoverFrames:u=12,detectionThreshold:l=.5,cooldownMs:p=2e3,executionProviders:c=["wasm"],embeddingWindowSize:f=16,debug:g=!1}={}){this.config={keywords:t,modelFiles:r,baseAssetUrl:i,frameSize:a,sampleRate:s,vadHangoverFrames:u,detectionThreshold:l,cooldownMs:p,executionProviders:c,embeddingWindowSize:f,debug:g},this._setOrtPath(n),this._emitter=Qy(),this._melBuffer=[],this._embeddingWindowSize=f,this._activeKeywords=new Set(t),this._vadState={h:null,c:null},this._isSpeechActive=!1,this._vadHangover=0,this._mediaStream=null,this._audioContext=null,this._workletNode=null,this._gainNode=null,this._processingQueue=Promise.resolve(),this._isDetectionCoolingDown=!1,this._loaded=!1}on(t,r){return this._emitter.on(t,r)}off(t,r){this._emitter.off(t,r)}async load(){var n;if(this._loaded)return;let t={executionProviders:this.config.executionProviders},r=a=>`${this.config.baseAssetUrl.replace(/\/+$/,"")}/${a}`;this._debug("Loading core models with options",t),this._melspecModel=await Kt.create(r("melspectrogram.onnx"),t),this._embeddingModel=await Kt.create(r("embedding_model.onnx"),t),this._vadModel=await Kt.create(r("silero_vad.onnx"),t),this._keywordModels={};let i=this.config.embeddingWindowSize;for(let a of this.config.keywords){let s=this.config.modelFiles[a];if(!s)throw new Error(`No model file configured for keyword "${a}"`);let u=await Kt.create(r(s),t),l=(n=this._inferKeywordWindowSize(u))!=null?n:this.config.embeddingWindowSize;i=Math.max(i,l);let p=[];for(let c=0;c<l;c++)p.push(new Float32Array(96).fill(0));this._keywordModels[a]={session:u,scores:new Array(50).fill(0),windowSize:l,history:p},this._debug("Loaded keyword model",{keyword:a,file:s,windowSize:l})}this._embeddingWindowSize=i,this._debug("Embedding window size resolved",this._embeddingWindowSize),this._resetState(),this._loaded=!0,this._emitter.emit("ready")}async start({deviceId:t,gain:r=1}={}){if(!this._loaded)throw new Error("Call load() before start()");if(this._workletNode)return;this._resetState(),this._mediaStream=await navigator.mediaDevices.getUserMedia({audio:t?{deviceId:{exact:t}}:!0}),this._audioContext=new AudioContext({sampleRate:this.config.sampleRate});let i=this._audioContext.createMediaStreamSource(this._mediaStream);this._gainNode=this._audioContext.createGain(),this._gainNode.gain.value=r;let n=new Blob([Zy],{type:"application/javascript"}),a=URL.createObjectURL(n);await this._audioContext.audioWorklet.addModule(a),this._workletNode=new AudioWorkletNode(this._audioContext,"audio-processor"),this._workletNode.port.onmessage=s=>{let u=s.data;u&&(this._processingQueue=this._processingQueue.then(()=>this._processChunk(u)).catch(l=>{this._emitter.emit("error",l)}))},i.connect(this._gainNode),this._gainNode.connect(this._workletNode),this._workletNode.connect(this._audioContext.destination),this._debug("Microphone stream started",{deviceId:t!=null?t:"default",gain:r})}async stop(){this._workletNode&&(this._workletNode.port.onmessage=null,this._workletNode.disconnect(),this._workletNode=null),this._gainNode&&(this._gainNode.disconnect(),this._gainNode=null),this._audioContext&&this._audioContext.state!=="closed"&&await this._audioContext.close(),this._audioContext=null,this._mediaStream&&(this._mediaStream.getTracks().forEach(t=>t.stop()),this._mediaStream=null),this._isDetectionCoolingDown=!1,this._debug("Engine stopped and media stream closed")}setGain(t){this._gainNode&&(this._gainNode.gain.value=t)}async runWav(t){if(!this._loaded)throw new Error("Call load() before runWav()");this._resetState();let i=await new(window.AudioContext||window.webkitAudioContext)().decodeAudioData(t.slice(0)),n=new OfflineAudioContext(1,Math.ceil(i.length*this.config.sampleRate/i.sampleRate),this.config.sampleRate),a=n.createBufferSource();a.buffer=i,a.connect(n.destination),a.start();let u=(await n.startRendering()).getChannelData(0);this._debug("Running offline WAV",{samples:u.length});let l=this._embeddingWindowSize*this.config.frameSize,p=u;if(p.length<l){let f=new Float32Array(l-p.length),g=new Float32Array(l);g.set(p,0),g.set(f,p.length),p=g}let c=0;for(let f=0;f<Math.floor(p.length/this.config.frameSize);f++){let g=p.subarray(f*this.config.frameSize,(f+1)*this.config.frameSize);await this._processChunk(g,{emitEvents:!1});for(let _ of Object.keys(this._keywordModels)){let y=this._keywordModels[_].scores.slice(-1)[0];y>c&&(c=y)}}return c}_resetState(){this._melBuffer=[];let t=[2,1,64];if(this._vadState.h?(this._vadState.h.data.fill(0),this._vadState.c.data.fill(0)):(this._vadState.h=new Be("float32",new Float32Array(128).fill(0),t),this._vadState.c=new Be("float32",new Float32Array(128).fill(0),t)),this._isSpeechActive=!1,this._vadHangover=0,this._isDetectionCoolingDown=!1,this._keywordModels)for(let r of Object.keys(this._keywordModels)){this._keywordModels[r].scores.fill(0);let i=this._keywordModels[r].history;if(i)for(let n=0;n<i.length;n++)i[n].fill(0)}this._debug("Internal buffers reset")}async _processChunk(t,{emitEvents:r=!0}={}){if(this.config.debug){let n=0,a=0;for(let u=0;u<t.length;u++){let l=t[u];a+=l*l;let p=Math.abs(l);p>n&&(n=p)}let s=Math.sqrt(a/t.length);this._debug("Chunk received",{rms:Number(s.toFixed(4)),peak:Number(n.toFixed(4))})}await this._runVad(t)?(!this._isSpeechActive&&r&&this._emitter.emit("speech-start"),this._isSpeechActive=!0,this._vadHangover=this.config.vadHangoverFrames):this._isSpeechActive&&(this._vadHangover-=1,this._vadHangover<=0&&(this._isSpeechActive=!1,r&&this._emitter.emit("speech-end"))),await this._runInference(t,this._isSpeechActive,r)}async _runVad(t){try{let r=new Be("float32",t,[1,t.length]),i=new Be("int64",[BigInt(this.config.sampleRate)],[]),n=await this._vadModel.run({input:r,sr:i,h:this._vadState.h,c:this._vadState.c});this._vadState.h=n.hn,this._vadState.c=n.cn;let a=n.output.data[0];return this._debug("VAD result",{confidence:Number(a.toFixed(3))}),a>.5}catch(r){return this._emitter.emit("error",r),!1}}async _runInference(t,r,i){let n=new Be("float32",t,[1,this.config.frameSize]),s=(await this._melspecModel.run({[this._melspecModel.inputNames[0]]:n}))[this._melspecModel.outputNames[0]].data;for(let u=0;u<s.length;u++)s[u]=s[u]/10+2;for(let u=0;u<5;u++)this._melBuffer.push(new Float32Array(s.subarray(u*32,(u+1)*32)));for(;this._melBuffer.length>=76;){let u=this._melBuffer.slice(0,76),l=new Float32Array(2432);for(let _=0;_<u.length;_++)l.set(u[_],_*32);let p={[this._embeddingModel.inputNames[0]]:new Be("float32",l,[1,76,32,1])},f=(await this._embeddingModel.run(p))[this._embeddingModel.outputNames[0]].data,g=new Float32Array(f);for(let _ of Object.keys(this._keywordModels)){let y=this._keywordModels[_];y.history.shift(),y.history.push(g);let v=new Float32Array(y.windowSize*96);for(let I=0;I<y.history.length;I++)v.set(y.history[I],I*96);let S=new Be("float32",v,[1,y.windowSize,96]),b=(await y.session.run({[y.session.inputNames[0]]:S}))[y.session.outputNames[0]].data[0];y.scores.shift(),y.scores.push(b),this._debug("Keyword score",{keyword:_,score:Number(b.toFixed(3)),windowSize:y.windowSize});let k=this._activeKeywords.has(_);i&&k&&b>this.config.detectionThreshold&&r&&!this._isDetectionCoolingDown?(this._isDetectionCoolingDown=!0,this._debug("Detection emitted",{keyword:_,score:b}),this._emitter.emit("detect",{keyword:_,score:b,at:performance.now()}),setTimeout(()=>{this._isDetectionCoolingDown=!1},this.config.cooldownMs)):i&&!k&&this._debug("Detection suppressed (inactive keyword)",{keyword:_,score:b})}this._melBuffer.splice(0,8)}}_setOrtPath(t){t&&(be.wasm.wasmPaths=t)}_inferKeywordWindowSize(t){var s;if(!t)return;let r=t.inputMetadata,i=(s=t.inputNames)==null?void 0:s[0];if(!r||!i)return;let n;if(Array.isArray(r)?n=r.find(u=>(u==null?void 0:u.name)===i)||r[0]:n=r[i],!n||!n.isTensor||!Array.isArray(n.shape))return;let a=n.shape[1];return typeof a=="number"&&Number.isFinite(a)?a:void 0}_debug(...t){this.config.debug&&console.debug("[WakeWordEngine]",...t)}setActiveKeywords(t){let r=Array.isArray(t)&&t.length?t:this.config.keywords;this._activeKeywords=new Set(r),this._debug("Active keywords updated",Array.from(this._activeKeywords))}};window.WakeWordEngine=ar;})();
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.31.1
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/

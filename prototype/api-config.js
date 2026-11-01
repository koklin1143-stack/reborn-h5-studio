/* Public deployment settings only. Provider keys belong in server environment variables. */
// Keep the existing local development service; published pages use the hosted backend.
window.RebornConfig={apiBase:['localhost','127.0.0.1'].includes(location.hostname)?'':'https://reborn-h-api-tvgcnmrfdl.cn-beijing.fcapp.run'};
